import PokemonsByDefaultService from "../services/PokemonsByDefaultService";
import PokemonService from "../services/PokemonService";
import { IPokemonByDefault } from "../types/services";

async function fetchPokemonsByDefault() {
  try {
    const data = await PokemonsByDefaultService();
    const pokemonList = data.results;

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
    console.error("Error en el Adapter:", error);
    return null;
  }
}

export default fetchPokemonsByDefault;