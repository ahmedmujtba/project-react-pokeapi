import axios from "axios";
import curPageUrl from "../components/Home";

const url = "https://pokeapi.co/api/v2/pokemon";

export function getPokemonList(curPageUrl) {
  return axios.get(url).then((res) => {
    return res.data;
  });
}

export function getSinglePokemonData(pokemon) {
  return axios.get(`${url}/${pokemon}`).then((res) => {
    return res.data;
  });
}
