import { useState } from "react";

function GameMain({ pokemonData }) {
  const [userCards, setUserCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [allCards, setAllCards] = useState();

  function userDeck(pokemonData) {
    return (
      <p>
        {pokemonData &&
          pokemonData.map((p) => {
            return <p key={p.name}>{p.name}</p>;
          })}
      </p>
    );
  }

  return (
    <div className="game-main">
      <li>{pokemonData}</li>
    </div>
  );
}

export default GameMain;
