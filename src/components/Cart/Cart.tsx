import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ProductModel } from '../../models/responses/ProductModel'
import { addToCart } from '../../features/Cart/cartSlice'

type Props = {
	product:ProductModel
}

const Cart = (props: Props) => {
 
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
    

    useEffect(() => {
      console.log(cart)
    },[cart])

  return (
    <button onClick={() => 
    {
      dispatch(addToCart(props.product)) 
      
    }
      } className='btn btn-secondary'>
        Add To Cart
    </button>
  )
}

export default Cart;