import { useEffect, useState, useRef } from "react";
import fetchPokemonsByType from "../handlers/fetchPokemonsByType";
import InputField from "../components/InputField";
import Modal from "../components/Modal";
import CardList from "../components/CardList";
import fetchPokemonsByDefault from "../handlers/fetchPokemonsByDefault";
import fetchPokemonsByName from "../handlers/fetchPokemonsByName";
import { IPokemonCard } from "../types/pokemon";

const Home = () => {
  const [currentPokemon, setCurrentPokemon] = useState<string>("");
  const [selectedPokemons, setSelectedPokemons] = useState<IPokemonCard[]>([]);
  const [firePokemons, setFirePokemons] = useState<IPokemonCard[]>([]);
  const [waterPokemons, setWaterPokemons] = useState<IPokemonCard[]>([]);
  const [electricPokemons, setElectricPokemons] = useState<IPokemonCard[]>([]);
  const [dragonPokemons, setDragonPokemons] = useState<IPokemonCard[]>([]);
  const [ghostPokemons, setGhostPokemons] = useState<IPokemonCard[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalLoading, setIsModalLoading] = useState<boolean>(true);
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

      const [
        firePokemons,
        waterPokemons,
        electricPokemons,
        dragonPokemons,
        ghostPokemons
      ] = await Promise.all([
        fetchPokemonsByType("fire"),
        fetchPokemonsByType("water"),
        fetchPokemonsByType("electric"),
        fetchPokemonsByType("dragon"),
        fetchPokemonsByType("ghost")
      ]);

      if (firePokemons) {
        setFirePokemons(firePokemons);
      }

      if (waterPokemons) {
        setWaterPokemons(waterPokemons);
      }

      if (electricPokemons) {
        setElectricPokemons(electricPokemons);
      }

      if (dragonPokemons) {
        setDragonPokemons(dragonPokemons);
      }

      if (ghostPokemons) {
        setGhostPokemons(ghostPokemons);
      }

      setIsLoading(false);
    };

    fetchPokemonsByTypeData();
  }, []);

  useEffect(() => {
    async function fetchPokemonsByDefaultData() {
      setIsModalLoading(true);
      const pokemonsByDefault = await fetchPokemonsByDefault();
      if (pokemonsByDefault) {
        setSelectedPokemons(pokemonsByDefault);
        setIsModalLoading(false);
      }
    }

    async function fetchPokemonsByNameData() {
      setIsModalLoading(true);
      const pokemonsByName = await fetchPokemonsByName(currentPokemon);
      if (pokemonsByName) {
        setSelectedPokemons(pokemonsByName);
        setIsModalLoading(false);
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

  return (
    <>
      <h1 className="text-center text-2xl">Usuario</h1>

      <InputField
        placeholder="Buscar Pokémon"
        isDisabled={isLoading}
        onClick={() => handleClickSearch()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeSearch(event)}
      />

      <CardList data={firePokemons} title="Fuego" isHorizontal isLoading={isLoading} />
      <CardList data={waterPokemons} title="Agua" isHorizontal isLoading={isLoading} />
      <CardList data={electricPokemons} title="Eléctrico" isHorizontal isLoading={isLoading} />
      <CardList data={dragonPokemons} title="Dragón" isHorizontal isLoading={isLoading} />
      <CardList data={ghostPokemons} title="Fantasma" isHorizontal isLoading={isLoading} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InputField
          ref={inputRef}
          placeholder="Buscar Pokémon"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeSearch(event)}
        />
        
        <CardList data={selectedPokemons} isLoading={isModalLoading} />
      </Modal>
    </>
  )
}

export default Home;