// App.js
import React from "react";
import "./App.css";
import usePokemonName from "./hooks/usePokemonName.js";

const App = () => {
  const [pokemonLoading, pokemonError, pokemonData] = usePokemonName("pikachu");
  console.log("pokemonData", pokemonData?.sprites?.other);

  return (
    <>
      {pokemonLoading ? (
        <div>Loading...</div>
      ) : pokemonError ? (
        <div>Oh no! There was an error</div>
      ) : (
        <div>
          <h1>{pokemonData.name}</h1>
          <img
            src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default}
            alt={pokemonData.name}
          />
        </div>
      )}
    </>
  );
};

export default App;
