import React from "react";
import logo from "../assets/logo.png";
import cardlogo from "../assets/card-logo.png";

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <img src={logo} alt="pokeball-logo" width="250" height="200"></img>
        <img
          src={cardlogo}
          alt="playing-cards-logo"
          width="200"
          height="200"
        ></img>
      </nav>
    </div>
  );
}

export default Navbar;
