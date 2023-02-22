import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [singlePokemonData, setSinglePokemonData] = useState();
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonHp, setPokemonHp] = useState();

  const { pokemon } = useParams();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("I cant find anything for this pokemon");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSinglePokemonData(data);
        setPokemonImg(data.sprites["front_default"]);
        console.log(data.stats);
        setPokemonHp(data.stats[(0)["base_stat"]]);
        setIsLoading(false);
      });
  }, [pokemon]);
  return (
    <div className="single-pokemon">
      {isLoading && <div>loading...</div>}
      <img src={pokemonImg} alt="pokemon-img" />
      <p>HP: {pokemonHp}</p>
    </div>
  );
}

export default PokemonInfo;
