import { ADD_TO_CART, REMOVE_FROM_CART,UPDATE_QUANTITY } from "../const";

export const addToCart = (product)=>({
    type : ADD_TO_CART,
    payload : product
})

export const removeFromCart = (id)=>({
    type : REMOVE_FROM_CART,
    payload : id
})

export const UpdateQuantity = (id , quantity)=>({
    type : UPDATE_QUANTITY,
    payload : {id , quantity}
})
