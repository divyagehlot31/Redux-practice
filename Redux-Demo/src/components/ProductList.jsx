import React, { useEffect } from "react";
import { fetchProducts } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductList = () => {
  const dispatch = useDispatch();

  const { products, filter } = useSelector((state) => state);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [filter]);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="container">
      <div className="row">
       {
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  height="200px"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    {product.title}
                  </h6>
                  <p className="card-text fw-bold">Rs.{product.price}</p>
                  <p className="text-muted small">{product.category}</p>
                </div>
              </div>
            </div>
          ))
}
      </div>
    </div>
  );
};

export default ProductList;
