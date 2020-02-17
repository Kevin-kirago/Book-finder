import React from "react";
import "../login/login.styles.scss";

import gitLogo from "../../assets/github.svg";
import googleLogo from "../../assets/google.svg";
import FormInput from "../../components/form_input/formInput.component";
import SignWithButton from "../../components/sign-up-with-btn/sign_up_with_btn.component";

// firebase
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			// Asynchronously signs in with email and password
			// fails with an error if sign in is unsuccesful
			await auth.signInWithEmailAndPassword(email, password);

			// if succesful clear our state
			this.setState({ email: "", password: "" });
		} catch (e) {
			console.log(e);
		}

		this.setState({ email: "", password: "" }, () => console.log(this.state));
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div>
				<header className="header">
					<div className="header__container">
						<h1 className="header__text">Welcome!</h1>
						<p className="header__paragraph">Log in into your account to do more budgets, or create new account for projects.</p>
					</div>
				</header>
				<main className="section-main">
					<div className="form__container">
						<div className="form__header">
							<h2 className="form__header--heading">Sign In With</h2>
							<div className="form__link">
								<SignWithButton logo={gitLogo} title="Github" />
								<SignWithButton eventHandler={signInWithGoogle} logo={googleLogo} title="Google" />
							</div>
						</div>
						<form className="form" onSubmit={this.handleSubmit}>
							<h2 className="form__header--heading">Or sign in with your credentials</h2>
							<FormInput name="email" type="email" value={email} handleChange={this.handleChange} label="Email" placeholder="example@mail.com" required />
							<FormInput name="password" type="password" value={password} handleChange={this.handleChange} label="Password" placeholder="Password" required />
							<button type="submit" className="form__btn">
								Sign In
							</button>
						</form>
					</div>
				</main>
			</div>
		);
	}
}

export default LoginPage;
