import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePokemonId = (pokemonId) => {
  const {
    isLoading: pokemonIdLoading,
    isError: pokemonIdError,
    data: pokemonIdData,
  } = useQuery({
    queryKey: ["pokemonId", pokemonId],
    queryFn: async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      return res.data;
    },
  });

  return [pokemonIdLoading, pokemonIdError, pokemonIdData];
};
export default usePokemonId;
