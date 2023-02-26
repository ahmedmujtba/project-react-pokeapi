import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";

export function getPokemonList() {
  return axios.get(url).then((res) => {
    return res.data;
  });
}

export function getSinglePokemonData(pokemon) {
  return axios.get(`${url}/${pokemon}`).then((res) => {
    console.log(res, "able to get single pokemon data");
  });
}
