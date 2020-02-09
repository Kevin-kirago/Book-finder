import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

// pages
import HomePage from "../../pages/home/home.component";
import LoginPage from "../../pages/login/login.component";
import RegisterPage from "../../pages/register/register.component";

// components
import Navigation from "../nav/nav.component";
import Footer from "../footer/footer.component";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		console.log(this.state);
	}

	render() {
		return (
			<div className="App">
				<Navigation />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
