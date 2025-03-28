import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import fetchPokemon from "./handlers/fetchPokemon";
import useHistorialStore from "find-your-pokemon/useHistorialStore";

const PokemonDetail = () => {
  const { id: pokemonId } = useParams();
  const [pokemon, setPokemonData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { addPokemon } = useHistorialStore();

  useEffect(() => {
    async function fetchPokemonData() {
      if (!isLoading) return;

      if (pokemonId) {
        const pokemon = await fetchPokemon(pokemonId);

        if (pokemon) {
          setPokemonData(pokemon);
          addPokemon(pokemon);
          setIsLoading(false);
        }
      }
    };

    fetchPokemonData();

  }, [pokemonId, isLoading, addPokemon])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <a href="/home">
          <img src="/icons/back-arrow.svg" />
        </a>
        <h1>{pokemon.name}</h1>
      </div>
      
      <img src={pokemon.sprites.front_default} />

      <div>
        <p>N°{pokemon.id}</p>
      </div>

    </>
  )
}

export default PokemonDetail
