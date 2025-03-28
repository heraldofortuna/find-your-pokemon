import { useEffect, useState, useRef } from "react";
import fetchPokemonsByType from "../handlers/fetchPokemonsByType";
import InputField from "../components/InputField";
import Modal from "../components/Modal";
import fetchPokemonsByDefault from "../handlers/fetchPokemonsByDefault";
import fetchPokemonsByName from "../handlers/fetchPokemonsByName";

const Home = () => {
  const [currentPokemon, setCurrentPokemon] = useState<string>("");
  const [selectedPokemons, setSelectedPokemons] = useState<any>([]);
  const [firePokemons, setFirePokemons] = useState<any>([]);
  const [waterPokemons, setWaterPokemons] = useState<any>([]);
  const [electricPokemons, setElectricPokemons] = useState<any>([]);
  const [dragonPokemons, setDragonPokemons] = useState<any>([]);
  const [ghostPokemons, setGhostPokemons] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputFocus() {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 200);
  };

  function handleClickSearch() {
    setIsModalOpen(true);
    handleInputFocus();
  }

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPokemon(event.target.value);
  }

  useEffect(() => {
    async function fetchPokemonsByTypeData() {
      setIsLoading(true);

      const pokemonsByType = await Promise.all([
        fetchPokemonsByType("fire"),
        fetchPokemonsByType("water"),
        fetchPokemonsByType("electric"),
        fetchPokemonsByType("dragon"),
        fetchPokemonsByType("ghost")
      ]);

      if (pokemonsByType) {
        const [
          fire,
          water,
          electric,
          dragon,
          ghost
        ] = pokemonsByType;

        setFirePokemons(fire);
        setWaterPokemons(water);
        setElectricPokemons(electric);
        setDragonPokemons(dragon);
        setGhostPokemons(ghost);
      }

      setIsLoading(false);
    };

    fetchPokemonsByTypeData();
  }, []);

  useEffect(() => {
    async function fetchPokemonsByDefaultData() {
      console.log("fetchPokemonsByDefaultData!");
      const pokemonsByDefault = await fetchPokemonsByDefault();
      console.log(pokemonsByDefault);
      if (pokemonsByDefault) {
        setSelectedPokemons(pokemonsByDefault);
      }
    }

    async function fetchPokemonsByNameData() {
      console.log("fetchPokemonsByNameData!");
      const pokemonsByName = await fetchPokemonsByName(currentPokemon);
      console.log(pokemonsByName);
      if (pokemonsByName) {
        setSelectedPokemons(pokemonsByName);
      }
    }

    if (isModalOpen) {
      if (currentPokemon.length > 0) {
        fetchPokemonsByNameData();
      } else {
        fetchPokemonsByDefaultData();
      }
    }
  }, [isModalOpen, currentPokemon]);

  if (isLoading) return <p>Cargando Pokémon...</p>;

  return (
    <>
      <h1 className="text-center text-2xl">Usuario</h1>

      <InputField
        placeholder="Buscar Pokémon"
        onClick={() => handleClickSearch()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeSearch(event)}
      />

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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InputField
          ref={inputRef}
          placeholder="Buscar Pokémon"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeSearch(event)}
        />
        
        <ul>
          {selectedPokemons
            .filter((pokemon: any) => pokemon.name.includes(currentPokemon))
            .map((pokemon: any) => (
              <li key={`pokemon-card-${pokemon.name}`}>
                <a href={`/pokemon-detail/${pokemon.id}`}>{pokemon.name}</a>
              </li>
            ))}
        </ul>
      </Modal>
    </>
  )
}

export default Home;