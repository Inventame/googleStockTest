const GF = require('./GFClass');

const company = {
  ABC: 'AmerisourceBergen Corp.',
  AAPL: 'Apple Inc.',
  MSFT: 'Microsoft Corporation',
  TSLA: 'Tesla Motors Inc.',
  F: 'Ford Motor Company',
};

exports.register = (_server, _options, _next) => {
  const io = require('socket.io')(_server.select('api').listener);

  const gf = new GF(io);

  gf.monitoringStatus();

  io.on('connection', (_socket) => {
  	gf.getLastStatus()
    	.then((_status) => {
  			const channels = Object.keys(_status.response);
  			channels.map((item) => {
  				_socket.emit('status', { channel: item, company: company[item], datasource: _status.response[item] });
  			});
  		})
  		.catch((_error) => {
  			_socket.emit('status', { error: _error });
  		});
  });
  _next();
};

exports.register.attributes = { name: 'api-ws-google-finance' };
