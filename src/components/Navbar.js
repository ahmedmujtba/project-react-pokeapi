import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <img
          className="pokemon-img"
          src={logo}
          alt="pokeball-logo"
          width="250"
          height="200"
        ></img>
      </nav>
    </div>
  );
}

export default Navbar;
