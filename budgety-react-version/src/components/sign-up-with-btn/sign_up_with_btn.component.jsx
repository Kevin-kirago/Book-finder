import React from "react";
import "./sign_up_with_btn.styles.scss";

const SignWithButton = ({ logo, title, eventHandler }) => {
	return (
		<div className="form__link--item" onClick={eventHandler}>
			<img src={logo} alt="github logo" className="form__link--icon" />
			<span>{title}</span>
		</div>
	);
};

export default SignWithButton;
