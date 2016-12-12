const request = require('request');

const crypto = require('crypto');

const apiUrl = 'http://finance.google.com/finance/info?client=ig&q=AAPL,ABC,MSFT,TSLA,F';
const company = {
  ABC: 'AmerisourceBergen Corp.',
  AAPL: 'Apple Inc.',
  MSFT: 'Microsoft Corporation',
  TSLA: 'Tesla Motors Inc.',
  F: 'Ford Motor Company',
};
const redis = require('redis').createClient(process.env.REDIS_URL);
//const redis = require('redis').createClient(process.env.REDIS_URL || 'redis://h:p31ikpe4uv5no2d3l0eqojlajc3@ec2-54-235-99-108.compute-1.amazonaws.com:14839');

//redis.flushdb();
redis.on('error', (_error) => {
  console.log('redis error', _error);
});

module.exports = function (_io) {
  this.__io = _io;

  this.__lastStatus = null;

  this.__checkStatus = () => new Promise((_done, _fail) => {
  	if (Math.random(0, 1) < 0.1) {
  		throw new Error('How unfortunate! The API Request Failed');
  	}
    request.get(apiUrl, (_error, _response, _body) => {
      try {
        if (_error) throw new Error('Api error connection');

        const response = JSON.parse(_body.replace('//', ''));
        const md5 = crypto.createHash('md5').update(_body);
        const status = {
          hash: md5.digest('hex'),
          response,
        };

        _done(status);
      } catch (_error) {
        _fail(_error.message);
      }
    });
  });

  this.__changeStatus = (_channel) => {
    redis.hgetall(_channel.t, (_error, _data) => {
      const now = Date.now();
      const md5 = crypto.createHash('md5');
      const channelHash = JSON.stringify(_channel);
      var publish = false;

      md5.update(channelHash);
      _channel.hash = md5.digest('hex');

      const channelData = JSON.stringify(_channel);
      var data = {};

      if (_data == null) {
        redis.hset(_channel.t, now, channelData);
        data[now] = channelData;
        this.__lastStatus.response[_channel.t] = data;
        publish = true;
      } else {
        const last = Math.max.apply(null, Object.keys(_data));
        const lastChannel = JSON.parse(_data[last]);
        if (lastChannel.hash !== _channel.hash) {
          redis.hset(_channel.t, now, channelData);
          _data[now] = channelData;
          publish = true;
          data = _data;
        } else if (!this.__lastStatus.response[_channel.t]) publish = true;

        this.__lastStatus.response[_channel.t] = _data;
      }
      if (publish && Object.keys(data).length > 0) {
        this.__io.emit('status', { channel: _channel.t, company: company[_channel.t], datasource: data });
      }
    });
  };

  this.getLastStatus = () => new Promise((_done, _fail) => {
    if (this.__lastStatus === null)				{
      return _fail('Connection to service failed');
    }
    _done(this.__lastStatus);
  });

  this.monitoringStatus = () => {
    const day = new Date().getDay();
    const isWeekend = (day === 6) || (day === 0);
    if (isWeekend) {
      this.__io.emit('status', { close: 'Market closed until monday' });
    }

    this.__checkStatus()
		.then((_status) => {
		  if (this.__lastStatus == null || _status.hash !== this.__lastStatus.hash) {
		    this.__lastStatus = {
		      hash: _status.hash,
		      response: {},
		    };
		    _status.response.map(_item => this.__changeStatus(_item));
		  }
		  setTimeout(this.monitoringStatus, 1000);
		})
		.catch((_error) => {
		  this.__io.emit('status', { error: _error.message || _error });
		  setTimeout(this.monitoringStatus, 1000);
		});
  };
};
