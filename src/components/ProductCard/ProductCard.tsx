import React from "react";
import { Link } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";
import { HttpStatusCode } from "axios";
import Cart from "../Cart/Cart";

type Props = {
	product: ProductModel,
	onDelete: (id: number) => void;
	title?: string;
}

export default function ProductCard(props: Props) {

	const deleteProduct = async () => {

		try {
			let response = await ProductService.delete(props.product.id);
			if (response.status === HttpStatusCode.Ok) {
				props.onDelete(props.product.id);
				alert("Veri başarıyla silindi");
			}

		} catch (e) {
			alert("Veri silinemedi");
		}
	}

	return (
		<div className="card" style={{ height: "550px" }}>
			<img src={props.product.thumbnail} className="card-img-top" alt="..."  style={{ height: "250px" }}/>
				<div className="card-body  d-flex flex-column justify-content-between">
					<h5 className="card-title">{props.product.title}</h5>
					<p className="card-text ">{props.product.description}</p>
					<Link
						to={`/product-detail/${props.product.id}`}
						className="btn btn-primary"
					>
						Details
					</Link>
						<button className="btn btn-danger" onClick={() => deleteProduct()}>
							Delete
						</button>
						<Cart product={props.product}/>
				</div>

		</div>
	);
}
