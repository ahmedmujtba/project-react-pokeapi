import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState();
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonHp, setPokemonHp] = useState();
  const [pokemonAttack, setPokemonAttack] = useState();
  const [pokemonDefense, setPokemonDefense] = useState();
  const [pokemonSpeed, setPokemonSpeed] = useState();
  const [pokemonWeight, setPokemonWeight] = useState();
  const [pokemonHeight, setPokemonHeight] = useState();
  const [typeOne, setTypeOne] = useState();
  const [typeTwo, setTypeTwo] = useState();

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
        setPokemonData(data);
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
  console.log(pokemonData.id);
  console.log(pokemonData.stats[3].base_stat);
  return (
    <div className="single-pokemon">
      {isLoading && <div>loading...</div>}
      <img src={pokemonImg} alt="pokemon-img" />
      <h2></h2>
      <br />
      <p>{typeOne}</p>
      <br />
      <p>HP: {pokemonHp}</p>
      <p>Attack: {pokemonAttack}</p>
      <p>Defense: {pokemonDefense}</p>
      <p>Speed: {pokemonSpeed}</p>
      <br />
      <p>Weight: {pokemonWeight}</p>
      <p>Height: {pokemonHeight}</p>
    </div>
  );
}

export default PokemonInfo;
