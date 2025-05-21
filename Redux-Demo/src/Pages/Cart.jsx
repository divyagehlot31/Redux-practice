import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity } from "../redux/actions/CartAction";
import { removeFromCart, UpdateQuantity } from "../redux/actions/CartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-4">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center justify-content-between border-bottom py-2"
        >
          <div>
            <h6>{item.title}</h6>
            <span>
              Rs.{item.price} × {item.quantity}
            </span>
            {/* <p>Rs.{item.price}</p> */}
          </div>
          <div>
            <button
              onClick={() =>
                dispatch(UpdateQuantity(item.id, item.quantity - 1))
              }
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() =>
                dispatch(UpdateQuantity(item.id, item.quantity + 1))
              }
            >
              +
            </button>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="btn btn-sm btn-danger ms-3"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h2>Total : {totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
