import axios from "axios";

const Url = "https://pokeapi.co/api/v2";

export function getPokemons() {
  return axios.get(`${Url}/pokemon`).then((res) => {
    return res.data.results;
  });
}
export function getAbilities() {
  return axios.get(`${Url}/ability/`).then((res) => {
    return res.data.results;
  });
}
