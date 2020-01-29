import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../nav/nav.styles.scss";

const Navigation = () => {
	return (
		<div className="nav">
			<div className="nav__header">
				<Link to="/" className="logo__text">
					Budgety
				</Link>
			</div>
			<ul className="nav__list">
				<li className="nav__item">
					<Link rel="stylesheet" to="/" className="nav__link">
						Home
					</Link>
				</li>
				<li className="nav__item">
					<Link rel="stylesheet" to="/login" className="nav__link">
						Login
					</Link>
				</li>
				<li className="nav__item">
					<Link rel="stylesheet" to="/register" className="nav__link">
						Register
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
