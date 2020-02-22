import React from "react";
import "./directory.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";

const Directory = ({ data: { search__value, results } }) => {
	return (
		<div className="directory">
			{search__value && results.length ? (
				<CollectionPreview data={results} />
			) : (
				<div className="no-results">
					<span role="img" aria-label="smile-emoji">
						😯
					</span>
					nothing yet! Try searching for a book
				</div>
			)}
		</div>
	);
};

export default Directory;
