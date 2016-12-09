import React, {Component} from "react"
import GF from "../../Components/GoogleFinance.jsx"
import { observer } from "mobx-react"

@observer
export default class Initial extends Component{
	constructor(props) {
	  super(props)
	
	  this.state = {}
	}
	
	componentWillMount(){
	}

	render(){
		return (<div style={style.Fullscreen}>
					<div style={style.Bar}>
						<h3>Google Finance</h3>
						<GF store={this.props.store}/>
					</div>
					<hr/>
					<div style={style.Fullscreen}>
						{this.props.children}
					</div>
				</div>)
	}
}

const style = {
	Bar: {
	    display: 'flex',
	    flexDirection: 'row',
	    alignItems: 'baseline',
	    justifyContent: 'space-between',
	    padding: '5px'
	},
	Fullscreen: {
		width: '100%',
		height: '100%'
	}
}