import React from "react";
import "../header/header.styles.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<h1 className="heading__primary">Welcome!</h1>
				<p className="paragraph">Log in into your account to do more budgets, or create new account for projects.</p>
			</div>
		</header>
	);
};

export default Header;
