import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <img src={logo} alt="pokeball-logo" width="200" height="200"></img>
        <h2>A weird cross between blackjack and pokemon</h2>
        <p>How this works:</p>
      </nav>
    </div>
  );
}

export default Navbar;
