import React, { Component } from "react";
import { setFilter } from "../redux/actions/action";
import { connect } from "react-redux";

const mapDispatchToProps ={
  setFilter,
}

class Filter extends Component{
  handleFilterChange=(e)=>{
    this.props.setFilter(e.target.value);
  }

render(){
  return (
    <div className="mb-4">
      <label className="form-label fw-bold">Filter By Category:</label>
      <select className="form-select" onChange={this.handleFilterChange}>

        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
};
}


export default connect(null, mapDispatchToProps)(Filter)
