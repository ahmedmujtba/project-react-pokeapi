import React from "react";
import { Link } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";

function PokemonList({ pokemons }) {
  return (
    <div className="pokemon-list">
      {pokemons &&
        pokemons.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          );
        })}
    </div>
  );
}

export default PokemonList;
