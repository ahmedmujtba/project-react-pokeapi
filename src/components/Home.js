import React from "react";
import Pagination from "./Pagination";
import PokemonList from "./PokemonList";
import { useEffect, useState } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [curPageUrl, setCurPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    fetch(curPageUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error("Sorry!, could not fetch any pokemon");
        }
        return res.json();
      })
      .then((data) => {
        setPokemons(data.results);
        setSinglePokemon(data.results.map((p) => p.name));
        setNextPage(data.next);
        setPrevPage(data.previous);
        setIsLoading(false);
      });
  }, [curPageUrl]);

  const nextPageHandler = () => {
    setCurPageUrl(nextPage);
  };

  const prevPageHandler = () => {
    setPrevPage(prevPage);
  };

  return (
    <div className="home">
      {isLoading && <div>loading...</div>}
      <PokemonList
        key={pokemons.name}
        pokemons={pokemons}
        singlePokemon={singlePokemon}
      ></PokemonList>
      <Pagination
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
      ></Pagination>
    </div>
  );
}

export default Home;
