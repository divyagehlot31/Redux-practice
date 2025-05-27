import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, UpdateQuantity } from "../redux/actions/CartAction";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Your cart is empty.
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="mb-4" key={item.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">
                    Rs.{item.price} × {item.quantity}
                  </p>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        dispatch(UpdateQuantity(item.id, item.quantity - 1))
                      }
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        dispatch(UpdateQuantity(item.id, item.quantity + 1))
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-auto"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="card bg-light shadow-sm mt-4">
            <div className="card-body d-flex justify-content-between align-items-center">
              <h4>Total</h4>
              <h4 className="text-success">Rs.{totalPrice.toFixed(2)}</h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
