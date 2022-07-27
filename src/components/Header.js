import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Product Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Products List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Product
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
