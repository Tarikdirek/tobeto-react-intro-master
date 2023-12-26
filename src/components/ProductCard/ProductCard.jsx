import React from "react";
import {Link} from "react-router-dom";

export default function ProductCard(props) {
	return (
		<div className="card">
			
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				
				<span className="m-2"><Link
					to={`/product-detail/${props.product.id}`}
					className="btn btn-primary"
				>
					Details
				</Link> 
				</span>
				<span>
					<Link
					to={`/products/delete/${props.product.id}`}
					className="btn btn-danger"
				>
					Delete
				</Link>
				</span>
				
			</div>
		</div>
	);
}
