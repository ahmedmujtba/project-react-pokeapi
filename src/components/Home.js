import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 50; i++) {
      pokemonArray.push(await getPokemonData(i));
      setPokemonData(pokemonArray);
      setIsLoading(false);
    }
  };

  const getPokemonData = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div className="home">
      {isLoading && <div>loading...</div>}
      <div className="pokemon-list">
        <ul>
          {pokemonData.map((pokemon) => {
            return (
              <div className="pokemon-data">
                <h2 key={pokemon.name}>{pokemon.name}</h2>
                <img
                  src={pokemon.sprites.other.home["front_default"]}
                  alt="pokemon-img"
                  height="200"
                  width="200"
                ></img>
                <p className="pokemon-hp">HP:{pokemon.stats[0]["base_stat"]}</p>
                <ul className="pokemon-ability">
                  Abilities:
                  {pokemon.abilities.map((ability) => {
                    return <li>{ability.ability.name}</li>;
                  })}
                </ul>
                <br />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
