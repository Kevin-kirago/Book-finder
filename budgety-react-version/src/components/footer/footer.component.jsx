import React from "react";
import { Link } from "react-router-dom";

import "../footer/footer.styles.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__header">
				<Link className="footer__header--logo" to="/">
					Budgety
				</Link>
			</div>
			<div className="footer__content">
				<ul className="footer__nav">
					<li className="footer__nav--item">
						<Link className="footer__nav--link" to="#">
							Contact
						</Link>
					</li>
					<li className="footer__nav--item">
						<Link className="footer__nav--link" to="#">
							About us
						</Link>
					</li>
					<li className="footer__nav--item">
						<Link className="footer__nav--link" to="#">
							What we do
						</Link>
					</li>
					<li className="footer__nav--item">
						<Link className="footer__nav--link" to="#">
							Career
						</Link>
					</li>
				</ul>
				<p className="copyright">Copyright &copy; 2020 | Budgety App</p>
			</div>
		</footer>
	);
};

export default Footer;
