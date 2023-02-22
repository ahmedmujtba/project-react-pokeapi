import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [singlePokemonData, setSinglePokemonData] = useState();
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonHp, setPokemonHp] = useState();
  const [pokemonAttack, setPokemonAttack] = useState();
  const [pokemonDefense, setPokemonDefense] = useState();
  const [pokemonSpecialAttack, setPokemonSpecialAttack] = useState();
  const [pokemonSpecialDefense, setPokemonSpecialDefense] = useState();
  const [pokemonSpeed, setPokemonSpeed] = useState();

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
        let hp = data.stats[0];
        let attack = data.stats[1];
        let defense = data.stats[2];
        let specialattack = data.stats[3];
        let specialdefense = data.stats[4];
        let speed = data.stats[5];
        setSinglePokemonData(data);
        setPokemonImg(data.sprites.other["official-artwork"]["front_default"]);
        setPokemonHp(hp["base_stat"]);
        setPokemonAttack(attack["base_stat"]);
        setPokemonDefense(defense["base_stat"]);
        setPokemonSpecialAttack(specialattack["base_stat"]);
        setPokemonDefense(specialdefense["base_stat"]);
        setPokemonSpeed(speed["base_stat"]);
        setIsLoading(false);
      });
  }, [pokemon]);
  return (
    <div className="single-pokemon">
      {isLoading && <div>loading...</div>}
      <img src={pokemonImg} alt="pokemon-img" />
      <p>HP: {pokemonHp}</p>
      <p>Attack: {pokemonAttack}</p>
      <p>Defense: {pokemonDefense}</p>
      <p>Special Attack: {pokemonSpecialAttack}</p>
      <p>Special Defense: {pokemonSpecialDefense}</p>
      <p>Speed: {pokemonSpeed}</p>
    </div>
  );
}

export default PokemonInfo;
