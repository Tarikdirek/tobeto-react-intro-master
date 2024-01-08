import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/responses/ProductModel";
import { RootState } from "../../app/store";



export interface CartState  {
    value:ProductModel[]
    
}

const initialState : CartState = {
    value : []
}

export const cartSlice = createSlice({
    name: 'cart',
    
    initialState,

    reducers: {
      addToCart: (state, action: PayloadAction<ProductModel>) => {
        return {...state,value:[...state.value,action.payload]}
      },
      removeFromCart: (state, action: PayloadAction<any>) => {
        return {...state, value: state.value.filter((i) => i !== action.payload.id)}
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      clearCart: (state) => {
        return{ ...state, value:[]}
      },
    },
  })
  
  export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;

  export const selectCart = (state:RootState) => state.cart.value;

  export default cartSlice.reducer;