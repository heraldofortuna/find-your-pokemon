import PokemonService from "../services/PokemonService";

async function fetchPokemon(pokemonId: string) {
  const data = await PokemonService(pokemonId);
  return data;
}

export default fetchPokemon;