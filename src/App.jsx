// App.js
import React, { useState } from "react";
import "./App.css";
import usePokemonName from "./hooks/usePokemonName.js";
import usePokemonId from "./hooks/usePokemonId.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

const App = () => {
  const [pokemonLoading, pokemonError, pokemonData] = usePokemonName("pikachu");
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonIdLoading, pokemonIdError, pokemonIdData] = usePokemonId(pokemonId);

  const handleClickPokemonRandomId = () => {
    setPokemonId(Math.floor(Math.random() * 1001));
  };
  return (
    <>
      {pokemonLoading || pokemonIdLoading ? (
        <div>Loading...</div>
      ) : pokemonError || pokemonIdError ? (
        <div>Oh no! There was an error</div>
      ) : (
        <div>
          <button onClick={handleClickPokemonRandomId}>Generate A New Pokemon</button>
          <h1>{pokemonIdData.name.toUpperCase()}</h1>
          <LazyLoadImage
            src={pokemonIdData?.sprites?.other?.["official-artwork"]?.front_default}
            alt={pokemonIdData.name}
          />
        </div>
      )}
    </>
  );
};

export default App;
