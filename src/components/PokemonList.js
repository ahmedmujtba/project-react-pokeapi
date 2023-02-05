import React from "react";

function PokemonList(props) {
  const pokemon = props.pokemon;
  return (
    <div>
      <p>{pokemon.name}</p>
    </div>
  );
}

export default PokemonList;
