import React from "react";
import Pagination from "./Pagination";
import PokemonList from "./PokemonList";
import { useEffect, useState } from "react";
import { getPokemonList } from "../utils/api";

function Home() {
  const [allData, setData] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [curPageUrl, setCurPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  //axios data fetching

  useEffect(() => {
    getPokemonList().then((data) => {
      setData(data);
      console.log(data);
      setPokemons(data.results);
      console.log(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setIsLoading(false);
    });
  }, [curPageUrl, allData, pokemons]);

  // useEffect data fetching using initial endpoint which returns pokemon name and url
  //   useEffect(() => {
  //     fetch(curPageUrl)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw Error("Sorry!, could not fetch any pokemon");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setData(data);
  //         setPokemons(data.results);
  //         setNextPage(data.next);
  //         setPrevPage(data.previous);
  //         setIsLoading(false);
  //       });
  //   }, [curPageUrl, allData]);

  //function to reset current page url to next page
  const nextPageHandler = () => {
    setCurPageUrl(nextPage);
  };
  //function to reset current page url to previous page
  const prevPageHandler = () => {
    setCurPageUrl(prevPage);
  };

  return (
    <div className="home">
      {isLoading && <div>loading...</div>}
      <PokemonList key={pokemons.name}>{pokemons}</PokemonList>
      <Pagination
        nextPageHandler={nextPage ? nextPageHandler : null}
        prevPageHandler={prevPage ? prevPageHandler : null}
      ></Pagination>
    </div>
  );
}

export default Home;
