import React from "react";

const ProductCard = ({
  product,
  cartProduct,
  handleAddToCart,
  handleIncrease,
  handleDecrease,
  // handleRemove,
  cardClass,
}) => {
  return (
    <div className="col-md-3 mb-4" key={product.id}>
      <div className={`card h-100 ${cardClass}`}>
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          height="200px"
        />
        <div className="card-body">
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text fw-bold">Rs.{product.price}</p>
          <p className="text-muted small">{product.category}</p>
        </div>

        <div className="mt-2 text-center">
          {!cartProduct ? (
            <button
              className="btn btn-primary mt-2"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          ) : (
            <>
              <div className="d-flex align-items-center justify-content-center mb-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handleDecrease(cartProduct)}
                >
                  -
                </button>
                <span className="mx-2">{cartProduct.quantity}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handleIncrease(cartProduct)}
                >
                  +
                </button>
              </div>
              {/* <button
                className="btn btn-danger btn-sm"
                onClick={() => handleRemove(cartProduct.id)}
              >
                Remove
              </button> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
