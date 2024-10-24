import { useState } from "react";
import "./Home.css";
import PokemonCard from "./components/PokemonCard";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    id: 1,
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    id: 2,
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    id: 3,
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    id: 4,
  },
  {
    name: "mew",
    id: 5,
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  function handleNext() {
    setPokemonIndex(() => pokemonIndex + 1);
  }
  function handlePrevious() {
    setPokemonIndex(() => pokemonIndex - 1);
  }
  return (
    <div className="app">
      {
        <PokemonCard
          pokemonListArr={pokemonList[pokemonIndex]}
          key={pokemonList[pokemonIndex].id}
        />
      }
      <div className="display-pokemon">
        {pokemonIndex > 0 ? (
          <button className="pokman-btn" type="button" onClick={handlePrevious}>
            Précédent
          </button>
        ) : (
          ""
        )}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button className="pokman-btn" type="button" onClick={handleNext}>
            Suivant
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
