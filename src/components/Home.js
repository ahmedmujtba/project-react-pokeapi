import React from "react";
import GameMain from "./GameMain.js";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 25; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    setPokemonData(pokemonArray);

    // pokemonArray.map((p) => {
    //   return console.log(p.name, p.stats[0]["base_stat"]);
    // });

    setIsLoading(false);
  };

  const pokemonDataHandler = () => {
    let userDeck =
      pokemonData[Math.floor(Math.random(10) * pokemonData.length)];
    console.log(userDeck);
    pokemonData.map((p) => {
      return console.log(p.name, p.stats[0]["base_stat"]);
    });
  };

  const getPokemonData = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  };
  useEffect(() => {
    getPokemonList();
  }, []);

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
  // const nextPageHandler = () => {
  //   setCurPageUrl(nextPage);
  // };
  //function to reset current page url to previous page
  // const prevPageHandler = () => {
  //   setCurPageUrl(prevPage);
  // };
  return (
    <div className="home">
      {isLoading && <div>loading...</div>}
      <div className="game-rules">
        <h2>A cross between pokemon & blackjack</h2>
        <br />
        <p>
          Rules are simple <br />
          1. User clicks 'start game' and 10 cards are added to both user's and
          computer's deck at random <br />
          2. User gets first turn and can play two cards at once, user would not
          be able to use these cards again. 3. Computer gets second turn and
          plays two cards with same rules. <br />
          3. Player with higher total HP wins but if the total difference
          between HP's is greater than 68, player loses.
          <br />
        </p>
        <br />
      </div>
      <button
        onClick={() => {
          pokemonDataHandler();
        }}
      >
        PLAY!
      </button>
      <GameMain
        key={pokemonData.name}
        pokemonData={pokemonData.name}
      ></GameMain>
      {/* <Pagination
        nextPageHandler={nextPage ? nextPageHandler : null}
        prevPageHandler={prevPage ? prevPageHandler : null}
      ></Pagination> */}
    </div>
  );
}

export default Home;
