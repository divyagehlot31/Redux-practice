import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../const";
import { produce } from "immer";

const initialState = {
  cartItems: [],
};

const cartReducer = produce((cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      {
        const item = cartState.cartItems.find(
          (p) => p.id === action.payload.id
        );
        if (item) {
          item.quantity += 1;
        
        } else {
          cartState.cartItems.push({ ...action.payload, quantity: 1 });
        }
      }

      break;

    case REMOVE_FROM_CART:
      cartState.cartItems = cartState.cartItems.filter(
        (p) => p.id !== action.payload
      );
      break;

    case UPDATE_QUANTITY: {
      const item = cartState.cartItems.find((p) => p.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
      break;
    }

    default:
      break;
  }
}, initialState);

export default cartReducer;
