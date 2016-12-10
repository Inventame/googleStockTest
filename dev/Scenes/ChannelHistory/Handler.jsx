import React, { Component } from "react"
import { observer } from "mobx-react"

@observer
export default class ChannelHistory extends Component{
	constructor(props) {
		super(props)

		this.state = {
			channel: ''
		}
	}

	componentWillMount(){
		const channel = this.props.params.channel
		this.setState({ channel: this.props.params.channel })
	}

	render(){
		const { channels } = this.props.store
		const channel = channels.get( this.state.channel ) || {}
		var last = {}
		var history = null
		if( channel !== undefined ){
			var data = channel.data || {}
			let keys = Object.keys(data) || []
			keys = keys.sort((_a, _b)=>{
				return _a > _b
			})
			const max = data[Math.max.apply(null, keys )]
			last = max? JSON.parse( max ) : {}

			history = keys.map( _item =>{
				let current = JSON.parse( data[_item] )
				return(<tr>
							<td style={{textAlign:'center'}}>{current.l}</td>
							<td style={{textAlign:'center'}}>{current.c}</td>
							<td style={{textAlign:'center'}}>{current.cp}</td>
							<td style={{textAlign:'center'}}>{current.div}</td>
							<td style={{textAlign:'center'}}>{current.yld}</td>
						</tr>)
			})
		}

		return (<div style={{padding:'5px'}}>
					<div><b>({this.state.channel}) {channel.company}</b></div>
					<div style={style.Card}>
						<div><b>{last.t} - {last.e}</b></div>
						<div>{last.lt}</div>
						<div>Price: {last.l}</div>
						<div>Change: {last.c}</div>
						<div>Percentage: {last.cp}%</div>
						<div>Div/Yield: {last.div}/{last.yld}</div>
						<hr/>
						<div>After Hours: {last.elt}</div>
						<div>Price: {last.el}</div>
						<div>Change: {last.ec}</div>
						<div>Percentage: {last.ecp}%</div>
					</div>
					<table style={{width: '100%'}}>
						<thead>
							<tr>
								<th>Price</th>
								<th>Change</th>
								<th>Change %</th>
								<th>Div</th>
								<th>Yield</th>
							</tr>
						</thead>
						<tbody>
							{history}
						</tbody>
					</table>
				</div>)
	}
}

const style = {
	Card: {
		display: 'flex',
		flexDirection: 'column',
		padding: '8px',
		margin: '8px',
		width: '250px',
		height: '210px',
		border: '1px solid gray',
	}
}