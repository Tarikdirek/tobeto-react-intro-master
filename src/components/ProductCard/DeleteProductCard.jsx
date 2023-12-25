import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function DeleteProductCard() {

    const [isDelete, setIsDelete] = useState(false)

    useEffect(()=>{
        handleDelete();
    },[])



    const handleDelete = () => {
        const response = axios.delete.
    }


  return (
    <div>DeleteProductCard</div>
  )
}
