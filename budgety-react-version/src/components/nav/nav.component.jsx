import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import "../nav/nav.styles.scss";

const Navigation = ({ currentUser }) => {
	return (
		<nav className="nav">
			<div className="nav__header">
				<Link to="/" className="nav__header--logo">
					BOOK FINDER
				</Link>
			</div>
			<ul className="nav__list">
				<li className="nav__item">
					<Link rel="stylesheet" to="/" className="nav__link">
						Home
					</Link>
				</li>
				{currentUser ? (
					<li className="nav__item">
						<div
							className="log-out-btn"
							onClick={() => {
								auth.signOut();
							}}>
							Log out
						</div>
					</li>
				) : (
					[
						<li className="nav__item" key="0">
							<Link rel="stylesheet" to="/login" className="nav__link">
								Login
							</Link>
						</li>,
						<li className="nav__item" key="1">
							<Link rel="stylesheet" to="/register" className="nav__link">
								Register
							</Link>
						</li>
					].map(item => item)
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
