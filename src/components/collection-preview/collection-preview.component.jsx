import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ data }) => {
	return (
		<div className="collection-preview">
			{data.map(item => (
				<CollectionItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default CollectionPreview;
