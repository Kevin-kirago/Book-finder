import React from "react";
import "../home/home.styles.scss";
import Axios from "axios";

import { key } from "../../config/config";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search__value: "",
			results: []
		};
	}

	handleChange = e => {
		const { value } = e.target;

		this.setState({ search__value: value });
	};

	async componentDidMount() {
		// const str = "ngugi wa thiong'o";
		try {
			let res = await Axios(`https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3/volumes?key=${key}`);
			this.setState({ results: [res] }, () => {
				console.log(this.state.results);
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div className="home">
				<div className="search">
					<div className="search__container">
						<input type="search" name="search" className="search__input" placeholder="search by author or book title ..." />
						<input type="submit" value="search" className="search__btn" />
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
