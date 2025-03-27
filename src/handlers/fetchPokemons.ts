import PokemonsByTypeService from "../services/PokemonsByTypeService";
import PokemonSpriteService from "../services/PokemonSpriteService";
import { IPokemonByType } from "../types/services";

async function fetchPokemons(type: string) {
  const data = await PokemonsByTypeService(type);
  const pokemonList = data.pokemon.slice(0, 10);

  const pokemonSprites = await Promise.all(
    pokemonList.map(async (pokemon: IPokemonByType) => {
      const sprites = await PokemonSpriteService(pokemon.pokemon.url);
      return sprites.sprites.front_default;
    })
  );
  
  return pokemonSprites;
}

export default fetchPokemons;