import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";
import { ProductModel } from "../../models/responses/ProductModel";


export default function ProductDetailCard() {
  const params = useParams<{id:string}>();
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    if (params.id) {
       ProductService.getById(parseInt(params.id)).then((response:any) =>
      {
          setProduct(response.data);
      })
    }
    
  }, []);


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-6 col-12 mb-5"></div>
        <div className="col-lg-3 col-md-6 col-12 mb-5">
          <div className="card">
            <img src={product?.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <b>{`Brand:  `} </b>
                {product?.title}
              </h5>
              <p className="card-text">
                <b>{`Description:  `} </b>
                {product?.description}
              </p>
              <p className="card-text">
                <b>{`Discount Percentage:  `} </b> {product?.discountPercentage}
              </p>
              <p className="card-text">
                <b>{`Price:  `} </b>
                {product?.price}
              </p>
              <p className="card-text">
                <b>{`Rating:  `} </b>
                {product?.rating}
              </p>
              <p className="card-text">
                <b>{`Stock:  `} </b>
                {product?.stock}
              </p>

              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-5"> </div>
      </div>
    </div>
  );
}
