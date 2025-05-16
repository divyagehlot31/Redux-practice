import React from "react";
import { setFilter } from "../redux/actions/action";
import { useDispatch } from "react-redux";

 const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="mb-4">
      <label className="form-label fw-bold">Filter By Category:</label>
      <select className="form-select" onChange={handleFilterChange}>
      {/* <select className="form-select"> */}

        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
};

export default Filter;
