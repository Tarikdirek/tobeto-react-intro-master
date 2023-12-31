import axios, {AxiosResponse} from "axios";
import GetAllProductsModel from "../models/responses/GetAllProductsModel";
import { ProductModel } from "../models/responses/ProductModel";


const API_URL = "https://dummyjson.com/products";

class ProductService{

    getAll() :Promise<AxiosResponse<GetAllProductsModel,any>>{
        return axios.get<GetAllProductsModel>(API_URL);
    }

    getById(id:number){
        return axios.get<ProductModel>(API_URL + "/" + id);
    }

    delete(id:number){
        return axios.delete<ProductModel>(API_URL+ "/" +id);
    }

    add(values:any){
        return axios.post<ProductModel>('https://dummyjson.com/products/add',values);
    }
}

export default new ProductService();