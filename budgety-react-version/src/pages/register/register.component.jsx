import React from "react";
import "../register/register.styles.scss";

import gitLogo from "../../assets/github.svg";
import googleLogo from "../../assets/google.svg";
import FormInput from "../../components/form_input/formInput.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import SignWithButton from "../../components/sign-up-with-btn/sign_up_with_btn.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			password: "",
			confirm_password: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { name, email, password, confirm_password } = this.state;

		if (password !== confirm_password) {
			alert("Password do not much");
			return;
		}

		try {
			// creates user with email and password and on success signs the user
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { name });
			this.setState({
				name: "",
				email: "",
				password: "",
				confirm_password: ""
			});
		} catch (e) {
			console.log(e);
		}
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { name, email, password, confirm_password } = this.state;

		return (
			<main className="section-main">
				<div className="form__container">
					<div className="form__header">
						<h2 className="form__header--heading">Sign Up With</h2>
						<div className="form__link">
							<SignWithButton logo={gitLogo} title="Github" />
							<SignWithButton eventHandler={signInWithGoogle} logo={googleLogo} title="Google" />
						</div>
					</div>
					<form className="form" onSubmit={this.handleSubmit}>
						<h2 className="form__header--heading">Or sign up with your credentials</h2>
						<FormInput name="name" value={name} type="text" handleChange={this.handleChange} label="Name" placeholder="Name" required />
						<FormInput name="email" value={email} type="email" handleChange={this.handleChange} label="Email" placeholder="example@mail.com" required />
						<FormInput name="password" value={password} type="password" handleChange={this.handleChange} label="Password" placeholder="Password" required />
						<FormInput name="confirm_password" value={confirm_password} type="password" handleChange={this.handleChange} label="Confirm Password" placeholder="Confirm Password" required />
						<button type="submit" className="form__btn">
							Create Account
						</button>
					</form>
				</div>
			</main>
		);
	}
}

export default RegisterPage;
