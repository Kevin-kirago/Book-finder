import React from "react";
import "../home/home.styles.scss";
import Axios from "axios";

import Directory from "../../components/directory/directory.component";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search__value: "",
			results: []
		};
	}

	getData = async query => {
		try {
			let res = await Axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
			return res.data.items;
		} catch (e) {
			console.log(e);
		}
	};

	handleChange = e => {
		const { value } = e.target;
		this.setState({ search__value: value });
	};

	componentDidUpdate(prevProps, prevState) {
		const { search__value } = this.state;
		if (prevState.search__value !== search__value) {
			this.getData(search__value).then(data => this.setState({ results: data }));
		}
	}

	render() {
		return (
			<div className="home">
				<div className="search">
					<form className="search__container" onSubmit={this.handleSubmit}>
						<input type="search" onChange={this.handleChange} name="search" className="search__input" placeholder="search by author or book title ..." />
						<input type="submit" value="search" className="search__btn" />
					</form>
				</div>

				<Directory data={this.state} />
			</div>
		);
	}
}

export default HomePage;
