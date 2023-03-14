import React from "react";
import { Link } from "react-router-dom";

function PokemonList({ pokemonNames }) {
  return (
    <div className="pokemon-list">
      <label htmlFor="pokemon-list">
        {pokemonNames &&
          pokemonNames.map((pokemonName) => {
            return (
              <li key={pokemonName.name}>
                <select name="" id="">
                  {pokemonName.name}
                </select>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png`}
                  alt=""
                />
                <Link to={`/${pokemonName.name}`}>{pokemonName.name}</Link>
              </li>
            );
          })}
      </label>
    </div>
  );
}

export default PokemonList;
