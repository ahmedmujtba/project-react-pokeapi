import React from "react";
import Pagination from "./Pagination";
import PokemonList from "./PokemonList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const [allData, setAllData] = useState();
  const [pokemonNames, setPokemonNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [curPageUrl, setCurPageUrl] = useState("");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  const pokemon = useParams();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      console.log(res.data);
      setAllData(res.data);
      setPokemonNames(res.data.results);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setIsLoading(false);
    });
  }, []);

  // const useFetch = (pokemon) => {
  //   useEffect(() => {
  //     getSinglePokemonData(pokemon).then((data) => {
  //       setPokemonData(data);
  //       setPokemonName(data.name);
  //       setTypeOne(data.types[0].type.name);
  //       setPokemonImg(data.sprites.other["official-artwork"]["front_default"]);
  //       setPokemonHp(data.stats[0].base_stat);
  //       setPokemonAttack(data.stats[1].base_stat);
  //       setPokemonDefense(data.stats[2].base_stat);
  //       setPokemonSpeed(data.stats[3].base_stat);
  //       setPokemonWeight(data.weight);
  //       setPokemonHeight(data.height);
  //       setIsLoading(false);
  //     });
  //   }, [pokemon]);
  // };

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
      <PokemonList key={pokemonNames.name} pokemonNames={pokemonNames}>
        {pokemonNames.name}
      </PokemonList>
      <Pagination
        nextPageHandler={nextPage ? nextPageHandler : null}
        prevPageHandler={prevPage ? prevPageHandler : null}
      ></Pagination>
    </div>
  );
}

export default Home;
