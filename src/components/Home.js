import React from "react";
import Pagination from "./Pagination";
import PokemonList from "./PokemonList";
import { useEffect, useState } from "react";
import { getPokemonList, getSinglePokemonData } from "../utils/api";
import { useParams } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";

function Home() {
  const [allData, setData] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [curPageUrl, setCurPageUrl] = useState();
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonHp, setPokemonHp] = useState();
  const [pokemonAttack, setPokemonAttack] = useState();
  const [pokemonDefense, setPokemonDefense] = useState();
  const [pokemonSpeed, setPokemonSpeed] = useState();
  const [pokemonWeight, setPokemonWeight] = useState();
  const [pokemonHeight, setPokemonHeight] = useState();
  const [typeOne, setTypeOne] = useState();
  const pokemon = useParams();

  //fetching list of pokemons, results include name and individual urls

  useEffect(() => {
    getPokemonList().then((data) => {
      setData(data);
      setPokemons(data.results);
      console.log(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setIsLoading(false);
    });
  }, [curPageUrl, allData]);

  const useFetch = (pokemon) => {
    useEffect(() => {
      getSinglePokemonData(pokemon).then((data) => {
        setPokemonData(data);
        setPokemonName(data.name);
        setTypeOne(data.types[0].type.name);
        setPokemonImg(data.sprites.other["official-artwork"]["front_default"]);
        setPokemonHp(data.stats[0].base_stat);
        setPokemonAttack(data.stats[1].base_stat);
        setPokemonDefense(data.stats[2].base_stat);
        setPokemonSpeed(data.stats[3].base_stat);
        setPokemonWeight(data.weight);
        setPokemonHeight(data.height);
        setIsLoading(false);
      });
    }, [pokemon]);
  };

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
  console.log(pokemonData);
  return (
    <div className="home">
      {isLoading && <div>loading...</div>}
      <PokemonList key={pokemons.name} pokemons={pokemons}>
        {pokemons.name}
      </PokemonList>
      <PokemonInfo
        onClick={() => useFetch}
        key={pokemonName}
        pokemonData={pokemonData}
      >
        {pokemonData}
      </PokemonInfo>
      <Pagination
        nextPageHandler={nextPage ? nextPageHandler : null}
        prevPageHandler={prevPage ? prevPageHandler : null}
      ></Pagination>
    </div>
  );
}

export default Home;
