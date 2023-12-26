import React,{useState,useEffect} from 'react'
import { Navigate, useParams } from "react-router-dom";
import axios from 'axios';
import Homepage from '../../pages/Homepage/Homepage';


export default function DeleteProductCard() {
    const {id} = useParams();
    const [isDelete, setIsDelete] = useState(false)
    const [product,setProduct] = useState([])


    useEffect(()=>{
        handleDelete();
    },[])



    const handleDelete = async () => {
        let response = await axios.delete('https://dummyjson.com/products/' + `${id}`)
         setProduct(response.data)
         setIsDelete(response.data.isDeleted)
      }


  return (
    <div>{isDelete && console.log(product)}
          {isDelete && <Navigate to={"/"} element={<Homepage/>}></Navigate>}
    </div>
  )
}
