const GF = require('./GFClass')
const company = {
	ABC: 'AmerisourceBergen Corp.',
	AAPL: 'Apple Inc.',
	MSFT: 'Microsoft Corporation',
	TSLA: 'Tesla Motors Inc.',
	F: 'Ford Motor Company'
}

exports.register = ( _server, _options, _next ) => {

    var io = require('socket.io')( _server.select('api').listener )
    var gf = new GF( io )
    gf.monitoringStatus()

    io.on('connection', _socket => {
    	gf.getLastStatus()
    		.then( _status => {
    			var channels = Object.keys( _status.response )
    			channels.map( _item =>{
    				_socket.emit( 'status', {channel: _item, company: company[_item], datasource: _status.response[_item]} )
    			} )
    		})
    		.catch( _error => {
    			_socket.emit( 'status', { error: _error } )
    		} )
    })

    _next()
}

exports.register.attributes = { name: 'api-ws-google-finance' }