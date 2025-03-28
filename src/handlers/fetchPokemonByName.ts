import PokemonByNameService from "../services/PokemonByNameService";
import { IPokemonCard } from "../types/pokemon";
import capitalizeText from "../utils/capitalizeText";

async function fetchPokemonByName(name: string): Promise<IPokemonCard[] | null> {
  try {
    const pokemonData = await PokemonByNameService(name);

    const pokemon = {
      id: pokemonData.id,
      name: capitalizeText(pokemonData.name),
      sprite: pokemonData.sprites.front_default
    };

    return [pokemon];
  } catch (error) {
    console.error("Error en el adaptador fetchPokemonByName:", error);
    return null;
  }
}

export default fetchPokemonByName;