import PokemonsByTypeService from "../services/PokemonsByTypeService";
import PokemonService from "../services/PokemonService";
import { IPokemonCard } from "../types/pokemon";
import { IPokemonByType } from "../types/services";

async function fetchPokemonsByType(type: string): Promise<IPokemonCard[] | null> {
  try {
    const data = await PokemonsByTypeService(type);
    const pokemonList = data.pokemon.slice(0, 10);
  
    const pokemons = await Promise.all(
      pokemonList.map(async (pokemon: IPokemonByType) => {
        const pokemonData = await PokemonService(pokemon.pokemon.url);

        return {
          id: pokemonData.id,
          name: pokemonData.name,
          sprite: pokemonData.sprites.front_default
        };
      })
    );

    return pokemons;
  } catch (error) {
    console.error("Error en el adaptador fetchPokemonsByType:", error);
    return null;
  }
}

export default fetchPokemonsByType;