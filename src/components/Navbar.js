import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <img src={logo} alt="pokeball-logo" width="200" height="200"></img>
        <h2>A weird cross between blackjack and pokemon</h2>
        <br />
        <p>How this works:</p>
        <br />
        <p>User is dealt a deck of 10 cards at random</p>
        <br />
        <p>
          They can play 2 cards at each given turn. Each card can only be used
          once
        </p>
        <br />
        <p>When user takes their turn, computer's 2 cards are revealed</p>
        <br />
        <p>Either User or Computer wins</p>
        <br />
        <p>
          Winner has to have total HP more than the loser but if HP difference
          is greater than 68, you lose
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
