import React from 'react';
import './App.css';
import { Route, PrivateRoute, Switch, Redirect, IndexRoute } from 'react-router';
import Login from './components/Login';
import Home from './containers/Home';

class App extends React.Component {

	constructor() {
		super();
	}


	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-dark bg-dark">
					<div className="container">
						<a className="navbar-brand" href="/">Todo List</a>
					</div>
				</nav>
				<div className="container" id="content">
					<Switch>
						<Route path="/" component={Login} />
						<Route exact path="/home" component={Home} />
					</Switch>
				</div>
			</div>
		);
	}

}

export default App;