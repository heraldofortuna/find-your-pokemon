import { useEffect, useState } from "react";
import fetchPokemons from "../handlers/fetchPokemons";

const Home = () => {
  const [firePokemons, setFirePokemons] = useState<any>([]);
  const [waterPokemons, setWaterPokemons] = useState<any>([]);
  const [electricPokemons, setElectricPokemons] = useState<any>([]);
  const [dragonPokemons, setDragonPokemons] = useState<any>([]);
  const [ghostPokemons, setGhostPokemons] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const firePokemons = await fetchPokemons("fire");
      const waterPokemons = await fetchPokemons("water");
      const electricPokemons = await fetchPokemons("electric");
      const dragonPokemons = await fetchPokemons("dragon");
      const ghostPokemons = await fetchPokemons("ghost");

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
          {firePokemons.map((pokemon: any, index: number) => (
            <li key={`pokemon-fire-${index}`} className="shrink-0">
              <img src={pokemon} alt={`pokemon-fire-${index}`} className="w-auto h-auto" />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Agua</h2>
        <ul className="flex overflow-x-auto scrollbar-hide">
          {waterPokemons.map((pokemon: any, index: number) => (
            <li key={`pokemon-water-${index}`} className="shrink-0">
              <img src={pokemon} alt={`pokemon-water-${index}`} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Eléctrico</h2>
        <ul className="flex overflow-x-auto scrollbar-hide">
          {electricPokemons.map((pokemon: any, index: number) => (
            <li key={`pokemon-electric-${index}`} className="shrink-0">
              <img src={pokemon} alt={`pokemon-electric-${index}`} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Dragón</h2>
        <ul className="flex overflow-x-auto scrollbar-hide">
          {dragonPokemons.map((pokemon: any, index: number) => (
            <li key={`pokemon-dragon-${index}`} className="shrink-0">
              <img src={pokemon} alt={`pokemon-dragon-${index}`} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Fantasma</h2>
        <ul className="flex overflow-x-auto scrollbar-hide">
          {ghostPokemons.map((pokemon: any, index: number) => (
            <li key={`pokemon-ghost-${index}`} className="shrink-0">
              <img src={pokemon} alt={`pokemon-ghost-${index}`} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home;