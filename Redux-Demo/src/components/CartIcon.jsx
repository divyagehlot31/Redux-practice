import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalItems = cartItems.length

  return (
    <NavLink to="/cart" className="btn">
      🛒 
      <span>
        {totalItems}
      </span>
    </NavLink>
  );
};

export default CartIcon;