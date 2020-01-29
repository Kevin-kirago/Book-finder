import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// pages
import HomePage from "../pages/home/home.component";
import LoginPage from "../pages/login/login.component";
import RegisterPage from "../pages/register/register.component";

// components
import Navigation from "../components/nav/nav.component";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log(this.state);
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Navigation />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/register" component={RegisterPage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
