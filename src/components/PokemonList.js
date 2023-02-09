import React, { useEffect, useState } from "react";

function PokemonList({ pokemons, singlePokemon }) {
  console.log(pokemons);
  console.log(singlePokemon);
  const [singlePokemonInfo, setSinglePokemonInfo] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokemon}`).then((res) => {
      console.log(res);
    });
  });

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
