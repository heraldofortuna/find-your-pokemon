import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import fetchPokemon from "./handlers/fetchPokemon";

const PokemonDetail = () => {
  const { id: pokemonId } = useParams();
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (pokemonId) {
        const data = await fetchPokemon(pokemonId);
        setData(data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pokemonId])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <a href="/home">
          <img src="/icons/back-arrow.svg" />
        </a>
        <h1>{data.name}</h1>
      </div>
      
      <img src={data.sprites.front_default} />

      <div>
        <p>N°{data.id}</p>
      </div>

    </>
  )
}

export default PokemonDetail
