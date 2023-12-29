import { HttpStatusCode } from "axios";
import { useFormik } from "formik";
import ProductService from "../../services/ProductService";
import validationForAdd from "../../validatons/Products/ValidationForAdd"

export default function AddProductCard() {



  const {handleSubmit,handleChange,values,errors} = useFormik({
    initialValues: {
      id: 0,
      title: "",
      description: "",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "",
      category:"",
      thumbnail: "",
      images: [""]
    },
    onSubmit: async (values) => {
      try {
              let response = await ProductService.add(values);
              if (response.status === HttpStatusCode.Ok) {
                 alert("Veri ekleme başarılı")
                 console.log(values)
              }
        } catch (e) {
          console.error("Error:", e);
          alert("Veri eklenemedi");
        }
    },
    validationSchema:validationForAdd

  })

  



  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mt-4"></div>
        <div className="col-3 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <h4>Product Add</h4>
              <label htmlFor="id" className="form-label">
                Product ID
              </label>
              <input
                value={values.id}
                type="number"
                className="form-control"
                id="id"
                onChange={handleChange} 
              />
                  <span className="badge small bg-danger text-end ">{errors.id}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Product Title
              </label>
              <input
                value={values.title}
                type="text"
                className="form-control"
                id="title"
                onChange={handleChange}
              />
                <span className="badge small bg-danger text-end ">{errors.title}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Product Description
              </label>
              <input
                value={values.description}
                type="text"
                className="form-control"
                id="description"
                onChange={handleChange}
              />
                <span className="badge small bg-danger text-end ">{errors.description}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Product Price
              </label>
              <input
                value={values.price}
                type="number"
                className="form-control"
                id="price"
                onChange={handleChange}
              />
                <span className="badge small bg-danger text-end ">{errors.price}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Product Rating
              </label>
              <input
                value={values.rating}
                type="number"
                className="form-control"
                id="rating"
                onChange={handleChange}
              />
                <span className="badge small bg-danger text-end ">{errors.rating}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="discountPercentage" className="form-label">
                Product DiscountPercentage
              </label>
              <input
                value={values.discountPercentage}
                type="number"
                className="form-control"
                id="discountPercentage"
                onChange={handleChange}
              />
                <span className="badge small bg-danger text-end ">{errors.discountPercentage}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Product Stock
              </label>
              <input
                value={values.stock}
                type="number"
                className="form-control"
                id="stock"
                onChange={handleChange}
              />
                <span className="badge small bg-danger text-end ">{errors.stock}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
                Product Brand
              </label>
              <input
                value={values.brand}
                type="text"
                className="form-control"
                id="brand"
                onChange={handleChange}
              />
                <span className="badge small bg-danger text-end ">{errors.brand}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Product Category
              </label>
              <input
                value={values.category}
                type="text"
                className="form-control"
                id="category"
                onChange={handleChange}
              />
                  <span className="badge small bg-danger text-end ">{errors.category}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="thumbnail" className="form-label">
                Product Thumbnail
              </label>
              <input
                value={values.thumbnail}
                type="text"
                className="form-control"
                id="thumbnail"
                onChange={handleChange}
              />
                  <span className="badge small bg-danger text-end ">{errors.thumbnail}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="images" className="form-label">
                Product Images
              </label>
              <input
                value={values.images}
                type="text"
                className="form-control"
                id="images"
                onChange={handleChange}
              />
                  <span className="badge small bg-danger text-end ">{errors.images}</span>
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
