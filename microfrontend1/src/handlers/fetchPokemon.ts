import PokemonService from "../services/PokemonService";

async function fetchPokemon(pokemonId: string) {
  try {
    const data = await PokemonService(pokemonId);
    return data;
  } catch (error) {
    console.error("Error en el Adapter:", error);
    return null;
  }
}

export default fetchPokemon;