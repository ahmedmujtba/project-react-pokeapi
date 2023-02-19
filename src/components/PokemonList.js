import React from "react";

function PokemonList({ pokemons, setCurPageUrl }) {
  const onClickHandler = () => {
    console.log(pokemons);
  };

  return (
    <div>
      {pokemons &&
        pokemons.map((pokemon) => {
          return (
            <p
              onClick={() => {
                onClickHandler();
              }}
              key={pokemon.name}
            >
              {pokemon.name}
            </p>
          );
        })}
    </div>
  );
}

export default PokemonList;
