import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>React Movies</h1>
      <ul className="navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/favorites"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Favorites</li>
        </NavLink>
      </ul>
    </>
  );
};

export default Navbar;
