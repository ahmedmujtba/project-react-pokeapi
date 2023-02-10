import React from "react";
import Pagination from "./Pagination";
import PokemonList from "./PokemonList";
import { useEffect, useState } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);
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
        setNextPage(data.next);
        setPrevPage(data.previous);
        setIsLoading(false);
      });
  }, [curPageUrl]);

  const nextPageHandler = () => {
    setCurPageUrl(nextPage);
  };

  const prevPageHandler = () => {
    setCurPageUrl(prevPage);
  };

  return (
    <div className="home">
      {isLoading && <div>loading...</div>}
      <PokemonList key={pokemons.name} pokemons={pokemons}></PokemonList>
      <Pagination
        nextPageHandler={nextPage ? nextPageHandler : null}
        prevPageHandler={prevPage ? prevPageHandler : null}
      ></Pagination>
    </div>
  );
}

export default Home;
