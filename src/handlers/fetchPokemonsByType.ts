import PokemonsByTypeService from "../services/PokemonsByTypeService";
import PokemonService from "../services/PokemonService";
import { IPokemonByType } from "../types/services";

async function fetchPokemonsByType(type: string) {
  try {
    const data = await PokemonsByTypeService(type);
    const pokemonList = data.pokemon.slice(0, 10);
  
    const pokemonSprites = await Promise.all(
      pokemonList.map(async (pokemon: IPokemonByType) => {
        const sprites = await PokemonService(pokemon.pokemon.url);
        return {
          id: sprites.id,
          image: sprites.sprites.front_default
        };
      })
    );
    
    return pokemonSprites;
  } catch (error) {
    console.error("Error en el Adapter:", error);
    return null;
  }
}

export default fetchPokemonsByType;