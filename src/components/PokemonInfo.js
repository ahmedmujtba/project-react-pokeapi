import React from "react";

function PokemonInfo({ pokemonData }) {
  console.log(pokemonData);
  // const [isLoading, setIsLoading] = useState(true);
  // const [pokemonData, setPokemonData] = useState();
  // const [pokemonName, setPokemonName] = useState();
  // const [pokemonImg, setPokemonImg] = useState();
  // const [pokemonHp, setPokemonHp] = useState();
  // const [pokemonAttack, setPokemonAttack] = useState();
  // const [pokemonDefense, setPokemonDefense] = useState();
  // const [pokemonSpeed, setPokemonSpeed] = useState();
  // const [pokemonWeight, setPokemonWeight] = useState();
  // const [pokemonHeight, setPokemonHeight] = useState();
  // const [typeOne, setTypeOne] = useState();
  // const [typeTwo, setTypeTwo] = useState();

  // const { pokemon } = useParams();
  // useEffect(() => {
  //   getSinglePokemonData(pokemon).then((data) => {
  //     console.log(data);
  //     setPokemonData(data);
  //     setPokemonName(data.name);
  //     setTypeOne(data.types[0].type.name);
  //     setPokemonImg(data.sprites.other["official-artwork"]["front_default"]);
  //     setPokemonHp(data.stats[0].base_stat);
  //     setPokemonAttack(data.stats[1].base_stat);
  //     setPokemonDefense(data.stats[2].base_stat);
  //     setPokemonSpeed(data.stats[3].base_stat);
  //     setPokemonWeight(data.weight);
  //     setPokemonHeight(data.height);
  //     setIsLoading(false);
  //   });
  // }, [pokemon]);

  return (
    <div className="card" style={{ width: "10rem" }}>
      <img
        className="img-fluid"
        style={{ height: "250px" }}
        alt="pokemon-img"
      />
      <div className="card-body">
        <h2 className="card-text">pokemon name</h2>
        <br />
        <p className="card-text"></p>
        <br />
        <p className="card-text">HP: </p>
        <p className="card-text">Attack: </p>
        <p className="card-text">Defense: </p>
        <p className="card-text">Speed: </p>
        <br />
        <p className="card-text">Height: </p>
        <p className="card-text">Weight: </p>
      </div>
    </div>
  );
}

export default PokemonInfo;
