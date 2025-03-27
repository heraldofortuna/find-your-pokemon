import { useEffect, useState } from "react";
import fetchPokemonsByType from "../handlers/fetchPokemonsByType";

const Home = () => {
  const [firePokemons, setFirePokemons] = useState<any>([]);
  const [waterPokemons, setWaterPokemons] = useState<any>([]);
  const [electricPokemons, setElectricPokemons] = useState<any>([]);
  const [dragonPokemons, setDragonPokemons] = useState<any>([]);
  const [ghostPokemons, setGhostPokemons] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const firePokemons = await fetchPokemonsByType("fire");
      const waterPokemons = await fetchPokemonsByType("water");
      const electricPokemons = await fetchPokemonsByType("electric");
      const dragonPokemons = await fetchPokemonsByType("dragon");
      const ghostPokemons = await fetchPokemonsByType("ghost");

      setFirePokemons(firePokemons);
      setWaterPokemons(waterPokemons);
      setElectricPokemons(electricPokemons);
      setDragonPokemons(dragonPokemons);
      setGhostPokemons(ghostPokemons);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl">Usuario</h1>
      <section>
        <h2>Fuego</h2>
        <ul className="flex overflow-x-auto scrollbar-hide">
          {firePokemons.map((pokemon: any) => (
            <li key={`pokemon-${pokemon.id}`} className="shrink-0">
              <a href={`/pokemon-detail/${pokemon.id}`}>
                <img src={pokemon.image} alt={`pokemon-${pokemon.id}`} className="w-auto h-auto" />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Agua</h2>
        <ul className="flex overflow-x-auto scrollbar-hide">
          {waterPokemons.map((pokemon: any) => (
            <li key={`pokemon-${pokemon.id}`} className="shrink-0">
              <a href={`/pokemon-detail/${pokemon.id}`}>
                <img src={pokemon.image} alt={`pokemon-${pokemon.id}`} />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Eléctrico</h2>
        <ul className="flex overflow-x-auto scrollbar-hide">
          {electricPokemons.map((pokemon: any) => (
            <li key={`pokemon-${pokemon.id}`} className="shrink-0">
              <a href={`/pokemon-detail/${pokemon.id}`}>
                <img src={pokemon.image} alt={`pokemon-${pokemon.id}`} />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Dragón</h2>
        <ul className="flex overflow-x-auto scrollbar-hide">
          {dragonPokemons.map((pokemon: any) => (
            <li key={`pokemon-${pokemon.id}`} className="shrink-0">
              <a href={`/pokemon-detail/${pokemon.id}`}>
                <img src={pokemon.image} alt={`pokemon-${pokemon.id}`} />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Fantasma</h2>
        <ul className="flex overflow-x-auto scrollbar-hide">
          {ghostPokemons.map((pokemon: any) => (
            <li key={`pokemon-${pokemon.id}`} className="shrink-0">
              <a href={`/pokemon-detail/${pokemon.id}`}>
                <img src={pokemon.image} alt={`pokemon-${pokemon.id}`} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home;