import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "../contexts/ThemeContext";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const { Theme, toggleTheme } = useContext(ThemeContext);

  // const toggleTheme = () => {
  //   setTheme(Theme === "light" ? "dark" : "light");
  // };

  const dark =
    Theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light";

  return (
    <nav className={`navbar navbar-expand-lg ${dark} px-3`}>
      {/* // <nav className="navbar navbar-expand-lg navbar-${theme} bg-${theme} px-3"> */}
      <NavLink className="navbar-brand" to="/">
        ProductApp
      </NavLink>
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
        <button
          onClick={toggleTheme}
          className={`btn btn-sm border-0 ms-3 fw-bold ${
            Theme === "dark" ? "text-light" : "text-dark"
          }`}
        >
          Toggle
        </button>
      </div>
      {<CartIcon/>}
    </nav>
  );
};

export default Navbar;
