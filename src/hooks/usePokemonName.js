import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePokemonName = (pokemonName) => {
  const {
    isLoading: pokemonLoading,
    isError: pokemonError,
    data: pokemonData,
  } = useQuery({
    queryKey: ["pokemonName", pokemonName],
    queryFn: async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      return res.data;
    },
  });

  return [pokemonLoading, pokemonError, pokemonData];
};
export default usePokemonName;
