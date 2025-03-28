import PokemonsByDefaultService from "../services/PokemonsByDefaultService";

async function fetchPokemonsByDefault() {
  try {
    const data = await PokemonsByDefaultService();
    return data.results;
  } catch (error) {
    console.error("Error en el Adapter:", error);
    return null;
  }
}

export default fetchPokemonsByDefault;