import { HttpStatusCode } from "axios";
import {  Form, Formik } from "formik";
import ProductService from "../../services/ProductService";
import validationForAdd from "../../validatons/Products/ValidationForAdd"
import FormikInput from "../../components/FormikInput/FormikInput";



interface Color{
  id:number
  name:string
}

interface ProductAddForm{
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  color: Color[],
}

export default function AddProductCard() {

  let colorList:Color[] =
  [
    {id:1,name:"Beyaz"},
    {id:2,name:"Sarı"},
    {id:3,name:"Siyah"},
    {id:4,name:"Kırmızı"}

  ]

  const initialValues:ProductAddForm = {
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    color: [],
  }


  const handleSubmit = async (values:ProductAddForm) => {
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
  }


  



  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mt-4"></div>
        <div className="col-3 mt-4">
          <Formik initialValues={initialValues}
           onSubmit={(initialValues)=> {handleSubmit(initialValues)}}
           validationSchema={validationForAdd}>
            <Form>
            <FormikInput name="title" label="Product Name"/>
            <FormikInput name="description" label="Product Description"/>
            <FormikInput name="price" label="Product Price" type="number"/>
            <FormikInput name="discountPercentage" label="Product DiscountPercentage" type="number"/>
            <FormikInput name="rating" label="Product Rating" type="number"/>
            <FormikInput name="stock" label="Product Stock" type="number"/>
            <FormikInput name="brand" label="Product Brand"/>
              <button type="submit" className="btn btn-primary mt-2">Save</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
