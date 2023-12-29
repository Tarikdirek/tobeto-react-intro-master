import React from "react";
import {Link} from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";
import { HttpStatusCode } from "axios";

type Props = {
	product: ProductModel,
	onDelete:(id:number) => void;
	title?: string;
}

export default function ProductCard(props:Props) {

	const deleteProduct = async () =>{

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
					<button className="btn btn-danger" onClick={() => deleteProduct()}>
						Delete 
					</button>		
				</span>
				
			</div>
		</div>
	);
}
