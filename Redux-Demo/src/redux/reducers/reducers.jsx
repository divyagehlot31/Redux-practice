import React from 'react'
import { SET_FILTER, SET_PRODUCTS , SET_LOADING} from '../const'


const initialState = {
  products :[],
  filter : 'all',
  loading: false
}

const reducers= (state =  initialState , action) => {

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
        loading:true
      };
    default:
      return state;
  }
};


export default reducers
