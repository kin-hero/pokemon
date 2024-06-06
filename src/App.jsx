import React from "react";
import "./App.css";
import usePokemon from "./hooks/usePokemon.js";

const App = () => {
  const [pokemonLoading, pokemonError, pokemonData] = usePokemon("pikachu");
  console.log("pokemonData", pokemonData);
  return (
    <>
      {pokemonLoading ? (
        <div>Loading...</div>
      ) : pokemonError ? (
        <div>Oh no! There was an error</div>
      ) : (
        <p>Api Success</p>
      )}
    </>
  );
};

export default App;
