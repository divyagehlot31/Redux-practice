import React, { useEffect, useContext } from "react";
import { fetchProducts } from "../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  addToCart,
  removeFromCart,
  UpdateQuantity,
} from "../redux/actions/CartAction";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, filter, loading } = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { Theme } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [filter]);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const findCartItem = (productId) => {
    return cartItems.find((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecrease = (cartProduct) => {
    if (cartProduct.quantity === 1) {
      dispatch(removeFromCart(cartProduct.id));
    } else {
      dispatch(UpdateQuantity(cartProduct.id, cartProduct.quantity - 1));
    }
  };

  const handleIncrease = (cartProduct) => {
    dispatch(UpdateQuantity(cartProduct.id, cartProduct.quantity + 1));
  };

  const handleRemove = (productId) => {
  dispatch(removeFromCart(productId));
};


  const cardClass =
    Theme === "dark" ? "bg-dark text-light border-light" : "bg-white text-dark";

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status" />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {filteredProducts.map((product) => {
          const cartProduct = findCartItem(product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              cartProduct={cartProduct}
              handleAddToCart={handleAddToCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleRemove={handleRemove}
              cardClass={cardClass}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
