import React from "react";
import { Link } from "react-router-dom";

function PokemonList({ pokemonNames }) {
  return (
    <div className="pokemon-list">
      <label htmlFor="pokemon-list">
        <select name="" id="">
          <option value="">
            {pokemonNames &&
              pokemonNames.map((pokemonName) => {
                return (
                  <li key={pokemonName.name}>
                    <Link to={`/${pokemonName.name}`}>{pokemonName.name}</Link>
                  </li>
                );
              })}
          </option>
        </select>
      </label>
    </div>
  );
}

export default PokemonList;
