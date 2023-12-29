import { ProductModel } from "./ProductModel";

export default interface GetAllProductsModel{
    total: number;
    skip: number;
    limit: number;
    products:ProductModel[];
}