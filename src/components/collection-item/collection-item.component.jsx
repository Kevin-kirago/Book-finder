import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
	console.log(item);

	const {
		selfLink,
		volumeInfo: {
			imageLinks: { thumbnail },
			title
		}
	} = item;

	console.log({ selfLink, title });

	return (
		<div className="collection-item">
			<div className="container-1">
				<img src={thumbnail} alt="" className="img-cover" />
			</div>
		</div>
	);
};

export default CollectionItem;
