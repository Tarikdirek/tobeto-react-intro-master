import * as yup from "yup";

const validations = yup.object({
    id: yup.number().positive("Must be positive number"),
    title: yup.string().min(2," Must be at least 2 character").max(10," Maximum 10 character!").required("Required Field"),
    description:yup.string().min(4).max(45).required("Required Field"),
    price: yup.number().positive("Must be positive number"),
    discountPercentage: yup.number().positive("Must be positive number"),
    rating: yup.number().positive("Must be positive number"),
    stock: yup.number().positive("Must be positive number"),
    brand: yup.string().min(2," Must be at least 2 character").max(10," Maximum 10 character!").required("Required Field"),
    category:yup.string().min(2," Must be at least 2 character").max(10," Maximum 10 character!").required("Required Field"),
    thumbnail:yup.string().min(2," Must be at least 2 character").max(10," Maximum 10 character!").required("Required Field"),
    images: yup.string().min(2," Must be at least 2 character").max(10," Maximum 10 character!").required("Required Field")
})

export default validations;