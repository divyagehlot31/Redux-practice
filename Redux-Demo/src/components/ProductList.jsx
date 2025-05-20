import React, { useEffect, useContext} from "react";
import { fetchProducts } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "../contexts/ThemeContext";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, filter, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [filter]);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

      const {Theme} = useContext(ThemeContext)
      

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
          {/* <span class="sr-only"></span> */}
        </div>
      </div>
    );
  }
    const cardClass = Theme === "dark" ? "bg-dark text-light border-light" : "bg-white text-dark";


  return (
    <div className="container">
      <div className="row">
        {filteredProducts.map((product) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
