import React, {Component} from "react";
import { fetchProducts } from "../redux/actions/action";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this.props.fetchProducts();
    }
  }

render(){

    const { products, filter, loading } = this.props

    const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
          {/* <span class="sr-only"></span> */}
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
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
}

const mapStateToProps = (state) => ({
  products: state.products,
  filter: state.filter,
  loading: state.loading,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
