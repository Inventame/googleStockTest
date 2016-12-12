import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';

@observer
export default class Channel extends Component {
  constructor(props) {
    super(props);
    this.__name = props.datasource.company;
		// console.log( Math.max.apply(null, Object.keys( props.datasource.data ) ), Object.keys(props.datasource.data) )
  }
  render() {
    const data = this.props.datasource.data;
    const last = JSON.parse(data[Math.max.apply(null, Object.keys(data))]);

    return (<div style={style.Card}>
					<b>{this.__name}</b>
					<small>{last.t} - {last.e}</small>
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
					<Link href={`#/channel/${last.t}`} className="btn">Show History</Link>
				</div>);
  }
}

const style = {
  Card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    margin: '8px',
    width: '250px',
    height: '260px',
    border: '1px solid gray',
  },
};
