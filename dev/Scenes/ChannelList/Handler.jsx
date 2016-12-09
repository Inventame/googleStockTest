import React, { Component } from "react"
import Channel from "../../Components/Channel.jsx"
import { observer } from "mobx-react"

@observer
export default class ChannelList extends Component{
	constructor(props) {
	  super(props)
	
	  this.state = {}
	}
	render(){
		const { channels } = this.props.store
		var channelList = channels.keys().map( (_key)=>{
			return (<Channel abbr={_key} datasource={channels.get(_key)}/>)
		})
		return (<div style={style.Container}>
					{channelList.length==0?
						<div style={style.Center}>
							<div className="spinner">
								<i className="spinner__dot spinner__dot--one"></i>
								<i className="spinner__dot spinner__dot--two"></i>
								<i className="spinner__dot spinner__dot--three"></i>
							</div>
						</div>
					:
						channelList}
				</div>)
	}
}

const style = {
	Container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'space-around',
		width: '100%',
		height: '100%',
	    flexWrap: 'wrap'
	},
	Center: {
		display:'flex',
		justifyContent:'center'
	}
}