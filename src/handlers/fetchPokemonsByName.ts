import PokemonsByNameService from "../services/PokemonsByNameService";

async function fetchPokemonsByName(name: string) {
  try {
    const data = await PokemonsByNameService(name);
    return data.results;
  } catch (error) {
    console.error("Error en el Adapter:", error);
    return null;
  }
}

export default fetchPokemonsByName;