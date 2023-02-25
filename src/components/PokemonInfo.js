import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonInfo() {
  const [isLoading, setIsLoading] = useState(true);
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
  pokemonData && console.log(pokemonData);

  return (
    <div className="card" style={{ width: "10rem" }}>
      {isLoading && <div>loading...</div>}
      <img
        className="img-fluid"
        style={{ height: "250px" }}
        src={pokemonImg}
        alt="pokemon-img"
      />
      <div className="card-body">
        <h2 className="card-text">{pokemonName}</h2>
        <br />
        <p className="card-text">{typeOne}</p>
        <br />
        <p className="card-text">HP: {pokemonHp}</p>
        <p className="card-text">Attack: {pokemonAttack}</p>
        <p className="card-text">Defense: {pokemonDefense}</p>
        <p className="card-text">Speed: {pokemonSpeed}</p>
        <br />
        <p className="card-text">Height: {pokemonHeight}</p>
        <p className="card-text">Weight: {pokemonWeight}</p>
      </div>
    </div>
  );
}

export default PokemonInfo;
