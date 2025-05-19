import { SET_FILTER, SET_PRODUCTS, SET_LOADING } from "../const";
import { getAllProducts } from "../../data/Api";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    const products = await getAllProducts();
    dispatch({
      type: SET_PRODUCTS,
      payload: products,
    });
  };
};

export const setFilter = (category) => {
  return {
    type: SET_FILTER,
    payload: category,
  };
};
