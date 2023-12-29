import React, {useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";

export default function Homepage() {
	const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts =  () => {
		ProductService.getAll().then((response:any) => 
		{
			setProducts(response.data.products)
		});
		
	};

	const onProductDelete = (id:number) => {
		setProducts(products.filter(p => p.id !== id));
	}

	return (
		<div className="container mt-5">
				<span className="mb-5">
					<Link
					to={`/products/add`}
					className="btn btn-success"
				>
					Add Product
				</Link>
				</span>
			<div className="row mt-5">
				{products.map(product => (
					<div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
						<ProductCard onDelete={onProductDelete} product={product} />
					</div>
				))}
			</div>
		</div>
	);
}
