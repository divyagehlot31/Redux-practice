import React from 'react'
import { SET_FILTER, SET_PRODUCTS } from '../const'


const initialState = {
  products :[],
  filter : 'all'
}

const reducers= (state =  initialState , action) => {

  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};


export default reducers
