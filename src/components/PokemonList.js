import React from "react";

function PokemonList({ pokemons, pokemonInfoHandler }) {
  // const pokemonInfoHandler = (pokemons) => {
  //   console.log(pokemons.target.innerHTML);
  // };

  return (
    <div>
      {pokemons &&
        pokemons.map((pokemon) => {
          return (
            <p
              onClick={() => {
                pokemonInfoHandler();
              }}
            >
              {pokemon.name}
            </p>
          );
        })}
    </div>
  );
}

export default PokemonList;
