import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			if (user) {
				const userRef = await createUserProfileDocument(user);

				userRef.onSnapshot(snapshot => {
					this.setState({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			}

			console.log(user);
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.state;

		return (
			<div className="App">
				<Navigation currentUser={currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/login" render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)} />
					<Route exact path="/register" render={() => (currentUser ? <Redirect to="/" /> : <RegisterPage />)} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
