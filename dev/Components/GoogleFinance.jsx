import React, { Component } from "react"

export default class GoogleFinance extends Component{
	constructor( _props ){
		super( _props )

		this.__socket = null
		this.state = {
			connected: false,
			error: null,
			close: null
		}

		this.__connect = this.__connect.bind(this)
		this.__monitorStatus = this.__monitorStatus.bind(this)
		this.__handleConnection = this.__handleConnection.bind(this)
	}

	componentWillMount(){
		setTimeout( this.__connect, 1 )
	}

	__connect(){
		try{
			if (Math.random(0, 1) < 0.1) throw new Error('How unfortunate! The API Request Failed')
			this.__socket = io()
			this.__socket.on( 'connect', this.__handleConnection.bind(this, true) )
			this.__socket.on( 'disconnect', this.__handleConnection.bind(this, false) )
			this.__socket.on( 'status', this.__monitorStatus )
			this.setState({error: null, connected: true})
		}catch( _error ){
			console.error( _error )
			this.setState({error: _error.message})
			setTimeout( this.__connect, 1 )
		}
	}

	__handleConnection( _connected ){
		this.setState({ error: !_connected?'How unfortunate! The API Request Failed':null, connected: _connected })
	}

	__monitorStatus( _status ){
		if( _status.error )
			this.setState({error: _status.error})
		if( _status.channel ){
			this.setState({error: null, close: null})
			this.props.store.setChannel( _status.channel, _status.company, _status.datasource )
		}
		if( _status.close ){
			this.setState({close: _status.close})
		}
	}

	render(){
		return (<div style={{textAlign:'right'}}>
					{this.state.close!==null?
						<div><small style={style.WarnMessage}>{this.state.close}</small></div>
					:null}
					{this.state.error!==null?
						<div style={{textAlign:'right'}}><span style={style.Error}>{this.state.error}</span><br/><small style={style.Message}>Reconnecting...</small></div>
					:
						this.state.connected?
							<div><small style={style.Message}>API OK</small></div>
						:
							<div><small style={style.Message}>Connecting...</small></div>
					}
				</div>)
	}
}

const style = {
	Error: {
		color: 'red',
		fontSize: '0.9em'
	},
	Message: {
		color: 'blue',
		fontSize: '0.7em'
	},
	WarnMessage: {
		color: '#FFD300',
		fontSize: '0.7em',
		fontWeight: 'bold'
	}
}