import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <NavLink className="navbar-brand" to="/">ProductApp</NavLink>
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
