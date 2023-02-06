import React, { useEffect, useState } from "react";
import { getPokemons } from "../utils/api";
import PokemonList from "./PokemonList";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
      setIsLoading(false);
    });
  }, [pokemons]);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      <PokemonList key={pokemons.name} pokemons={pokemons}></PokemonList>
    </div>
  );
}

export default Home;
