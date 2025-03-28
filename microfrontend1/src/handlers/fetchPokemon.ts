import PokemonService from "../services/PokemonService";
import { IPokemon } from "../types/pokemon";
import capitalizeText from "../utils/capitalizeText";

async function fetchPokemon(pokemonId: string): Promise<IPokemon | null> {
  try {
    const data = await PokemonService(pokemonId);

    const pokemon = {
      id: data.id,
      name: capitalizeText(data.name),
      sprite: data.sprites.front_default,
      types: data.types.map((type: any) => capitalizeText(type.type.name)),
      moves: data.moves.map((move: any) => capitalizeText(move.move.name)),
      height: data.height,
      weight: data.weight,
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      }
    };

    return pokemon;
  } catch (error) {
    console.error("Error en el adaptador fetchPokemon:", error);
    return null;
  }
}

export default fetchPokemon;