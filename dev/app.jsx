import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Initial from './Scenes/Main/Handler.jsx';
import store from './FinanceStore.jsx';
import ChannelList from './Scenes/ChannelList/Handler.jsx';
import ChannelHistory from './Scenes/ChannelHistory/Handler.jsx';

const InitialContainer = _props => (<Initial store={store} children={_props.children}/>);
const ChannelListContainer = () => (<ChannelList store={store}/>);
const ChannelHistoryContainer = _props => (<ChannelHistory store={store} {..._props} />);

const App = () => (<Router history={hashHistory}>
					<Route path="/" component={InitialContainer}>
						<IndexRoute component={ChannelListContainer}/>
						<Route path="channel/:channel" component={ChannelHistoryContainer} />
					</Route>
				</Router>);

ReactDOM.render(<App/>, document.getElementById('app'));
