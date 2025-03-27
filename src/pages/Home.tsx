import { useEffect, useState } from "react";
import fetchPokemonsByType from "../handlers/fetchPokemonsByType";

const Home = () => {
  const [firePokemons, setFirePokemons] = useState<any>([]);
  const [waterPokemons, setWaterPokemons] = useState<any>([]);
  const [electricPokemons, setElectricPokemons] = useState<any>([]);
  const [dragonPokemons, setDragonPokemons] = useState<any>([]);
  const [ghostPokemons, setGhostPokemons] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [
          fire,
          water,
          electric,
          dragon,
          ghost
        ] = await Promise.all([
          fetchPokemonsByType("fire"),
          fetchPokemonsByType("water"),
          fetchPokemonsByType("electric"),
          fetchPokemonsByType("dragon"),
          fetchPokemonsByType("ghost")
        ]);

        setFirePokemons(fire);
        setWaterPokemons(water);
        setElectricPokemons(electric);
        setDragonPokemons(dragon);
        setGhostPokemons(ghost);
      } catch (err) {
        setError("Error al cargar los Pokémon");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Cargando Pokémon...</p>;
  if (error) return <p>{error}</p>;

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