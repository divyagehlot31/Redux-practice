import React, { useContext, useEffect } from "react";
import { setFilter } from "../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../contexts/ThemeContext";

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.product);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  // for default value set
  useEffect(() => {
    dispatch(setFilter("all"));
  }, []);

  const { Theme } = useContext(ThemeContext);

  const filterClass =
    Theme === "dark" ? "bg-dark text-light border-light" : "bg-white text-dark";

  return (
    <div className="mb-4 p-3 rounded shadow-sm">
      <label className="form-label fw-bold">Filter By Category:</label>
      <select
        className={`form-select ${filterClass}`}
        value={filter}
        onChange={handleFilterChange}
      >
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
