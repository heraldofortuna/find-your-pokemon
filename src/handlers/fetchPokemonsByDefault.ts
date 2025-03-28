import PokemonsByDefaultService from "../services/PokemonsByDefaultService";
import PokemonService from "../services/PokemonService";
import { IPokemonCard } from "../types/pokemon";
import { IPokemonByDefault } from "../types/services";

async function fetchPokemonsByDefault(limit = 30, offset = 0): Promise<IPokemonCard[] | null> {
  try {
    const data = await PokemonsByDefaultService(limit, offset);
    const pokemonList = data;

    const pokemons = await Promise.all(
      pokemonList.map(async (pokemon: IPokemonByDefault) => {
        const pokemonData = await PokemonService(pokemon.url);

        return {
          id: pokemonData.id,
          name: pokemonData.name,
          sprite: pokemonData.sprites.front_default
        };
      })
    );

    return pokemons;
  } catch (error) {
    console.error("Error en el adaptador fetchPokemonsByDefault:", error);
    return null;
  }
}

export default fetchPokemonsByDefault;