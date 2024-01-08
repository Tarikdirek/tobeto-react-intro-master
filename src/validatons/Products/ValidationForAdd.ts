import * as yup from "yup";
import { passwordRule } from "../../utilities/validation/customeValidationRules";

const validations = yup.object({
    title: yup.string().min(2," Must be at least 2 character").max(10," Maximum 10 character!").required("Required Field").test(
        "is-strong","must be at least 1 upper case 1 lower case 1 numerical character",
        passwordRule
    ),
    description:yup.string().min(4).max(45).required("Required Field"),
    price: yup.number().min(1,"The field must be greater than 0").positive("Must be positive number"),
    discountPercentage: yup.number().positive("Must be positive number"),
    rating: yup.number().min(1,"The field must be greater than 0").positive("Must be positive number"),
    stock: yup.number().min(1,"The field must be greater than 0").positive("Must be positive number"),
    brand: yup.string().min(2," Must be at least 2 character").max(10," Maximum 10 character!").required("Required Field"),
})



export default validations;