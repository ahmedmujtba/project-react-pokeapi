import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <img src={logo} alt="pokeball-logo" width="200" height="200"></img>
        <input type="text" />
      </nav>
    </div>
  );
}

export default Navbar;
