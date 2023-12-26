import axios from "axios";
import React, { useState, useEffect } from "react";

export default function AddProductCard() {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    price: "",
    rating: "",
    image: "",
  });

  useEffect(() => {}, []);

  const handleProductAdd = async (event) => {
    event.preventDefault();

    let apiUrl = "https://dummyjson.com/products/add";
    let newProduct = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      rating: product.rating,
      image: product.image,
    };
    let response = await axios.post(apiUrl, newProduct);
    console.log(response.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mt-4"></div>
        <div className="col-3 mt-4">
          <form onSubmit={handleProductAdd}>
            <div className="mb-3">
              <h4>Product Add</h4>
              <label htmlFor="productId" className="form-label">
                Product ID
              </label>
              <input
                value={product.id}
                type="number"
                className="form-control"
                id="productId"
                onChange={(e) => setProduct({...product,id:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productTitle" className="form-label">
                Product Title
              </label>
              <input
                value={product.title}
                type="text"
                className="form-control"
                id="productTitle"
                onChange={(e) => setProduct({...product,title:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Product Description
              </label>
              <input
                value={product.description}
                type="text"
                className="form-control"
                id="description"
                onChange={(e) => setProduct({...product,description:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Product Price
              </label>
              <input
                value={product.price}
                type="number"
                className="form-control"
                id="price"
                onChange={(e) => setProduct({...product,price:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Product Rating
              </label>
              <input
                value={product.rating}
                type="number"
                className="form-control"
                id="rating"
                onChange={(e) => setProduct({...product,rating:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Product Image
              </label>
              <input
                value={product.image}
                type="text"
                className="form-control"
                id="image"
                onChange={(e) => setProduct({...product,image:e.target.value})}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
