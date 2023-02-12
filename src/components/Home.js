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
  //function to reset current page url to next page
  const nextPageHandler = () => {
    setCurPageUrl(nextPage);
  };
  //function to reset current page url to previous page
  const prevPageHandler = () => {
    setCurPageUrl(prevPage);
  };
  //updates URL to individual pokemon so user can access individual pokemon properties
  const pokemonInfoHandler = (pokemons) => {
    console.log(pokemons);
    console.log(pokemons.target.innerHTML);
    setCurPageUrl(
      `https://pokeapi.co/api/v2/pokemon/${pokemons.target.innerHTML}`
    );
  };
  return (
    <div className="home">
      {isLoading && <div>loading...</div>}
      <PokemonList
        key={pokemons.name}
        pokemons={pokemons}
        pokemonInfoHandler={pokemonInfoHandler}
      ></PokemonList>
      <Pagination
        nextPageHandler={nextPage ? nextPageHandler : null}
        prevPageHandler={prevPage ? prevPageHandler : null}
      ></Pagination>
    </div>
  );
}

export default Home;
