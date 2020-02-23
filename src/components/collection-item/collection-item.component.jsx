import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
	console.log(item);

	const {
		selfLink,
		volumeInfo: {
			imageLinks: { smallThumbnail },
			title
		}
	} = item;

	console.log({ selfLink, title });

	return (
		<div className="collection-item">
			<div className="container-1">
				<img src={smallThumbnail} alt="" className="img-cover" />
			</div>
			<div className="container-2">
				<div className="title">
					<b>Title</b>: {title}
				</div>
			</div>
		</div>
	);
};

export default CollectionItem;
