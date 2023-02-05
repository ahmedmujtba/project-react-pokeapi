import React, { useEffect, useState } from "react";
import { getPokemons } from "../utils/api";
import PokemonList from "./PokemonList";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => {
            return <PokemonList key={pokemon.name} pokemon={pokemon} />;
          })}
      </ul>
    </div>
  );
}

export default Home;
