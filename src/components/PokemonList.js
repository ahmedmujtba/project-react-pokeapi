import React from "react";

function PokemonList({ pokemons }) {
  return (
    <div>
      {pokemons &&
        pokemons.map((pokemon) => {
          return <p>{pokemon.name}</p>;
        })}
    </div>
  );
}

export default PokemonList;
