import PokemonByNameService from "../services/PokemonByNameService";
import { IPokemonCard } from "../types/pokemon";

async function fetchPokemonByName(name: string): Promise<IPokemonCard[] | null> {
  try {
    const pokemonData = await PokemonByNameService(name);

    const pokemon = {
      id: pokemonData.id,
      name: pokemonData.name,
      sprite: pokemonData.sprites.front_default
    };

    return [pokemon];
  } catch (error) {
    console.error("Error en el adaptador fetchPokemonByName:", error);
    return null;
  }
}

export default fetchPokemonByName;