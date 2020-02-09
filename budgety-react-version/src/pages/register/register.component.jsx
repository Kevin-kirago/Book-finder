import React from "react";
import { Link } from "react-router-dom";
import "../register/register.styles.scss";

import gitLogo from "../../assets/github.svg";
import googleLogo from "../../assets/google.svg";
import FormInput from "../../components/form_input/formInput.component";

class RegisterPage extends React.Component {
	render() {
		return (
			<div>
				<header className="header">
					<div className="header__container">
						<h1 className="header__text">Welcome!</h1>
						<p className="header__paragraph">Log in into your account to do more budgets, or create new account for projects.</p>
					</div>
				</header>
				<main className="section-main">
					<form action="#" className="form">
						<div className="form__header">
							<h2 className="form__header--heading">Sign Up With</h2>
							<div className="form__link">
								<Link to="www.github.com" target="_blank" className="form__link--item">
									<img src={gitLogo} alt="github logo" className="form__link--icon" />
									<span>Github</span>
								</Link>
								<Link to="www.google.com" target="_blank" className="form__link--item">
									<img src={googleLogo} alt="github logo" className="form__link--icon" />
									<span>Google</span>
								</Link>
							</div>
						</div>
						<div className="form__container">
							<h2 className="form__header--heading">Or sign up with your credentials</h2>
							<FormInput name="name" type="text" label="Name" placeholder="Name" />
							<FormInput name="email" type="email" label="Email" placeholder="example@mail.com" required />
							<FormInput name="password" type="password" label="Password" placeholder="Password" required />
							<FormInput name="password" type="password" label="Confirm Password" placeholder="Confirm Password" required />
							<button type="submit" className="form__btn">
								Create Account
							</button>
						</div>
					</form>
				</main>
			</div>
		);
	}
}

export default RegisterPage;
