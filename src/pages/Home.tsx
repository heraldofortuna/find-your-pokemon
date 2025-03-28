import { useEffect, useState, useRef } from "react";
import fetchPokemonsByType from "../handlers/fetchPokemonsByType";
import InputField from "../components/InputField";
import Modal from "../components/Modal";
import CardList from "../components/CardList";
import Toast from "../components/Toast";
import fetchPokemonsByDefault from "../handlers/fetchPokemonsByDefault";
import fetchPokemonByName from "../handlers/fetchPokemonByName";
import useHistorialStore from "../stores/useHistorialStore";
import { IPokemonCard } from "../types/pokemon";

const Home = () => {
  const [currentPokemon, setCurrentPokemon] = useState<string>("");
  const [selectedPokemons, setSelectedPokemons] = useState<IPokemonCard[]>([]);
  const [defaultPokemons, setDefaultPokemons] = useState<IPokemonCard[]>([]);
  const [lastPokemon, setLastPokemon] = useState<IPokemonCard | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [firePokemons, setFirePokemons] = useState<IPokemonCard[]>([]);
  const [waterPokemons, setWaterPokemons] = useState<IPokemonCard[]>([]);
  const [electricPokemons, setElectricPokemons] = useState<IPokemonCard[]>([]);
  const [dragonPokemons, setDragonPokemons] = useState<IPokemonCard[]>([]);
  const [ghostPokemons, setGhostPokemons] = useState<IPokemonCard[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalLoading, setIsModalLoading] = useState<boolean>(true);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const { pokemons } = useHistorialStore();

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

  function handleScrollEnd () {
    setOffset((prevOffset) => prevOffset + 30)
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
      const pokemonsByDefault = await fetchPokemonsByDefault();
      if (pokemonsByDefault) {
        setDefaultPokemons(pokemonsByDefault);
      }
    }

    if (isModalOpen) {
      fetchPokemonsByDefaultData();
    }
  }, [isModalOpen]);

  useEffect(() => {
    async function fetchPokemonsByDefaultData() {
      const pokemonsByDefault = await fetchPokemonsByDefault(30, offset);
      if (pokemonsByDefault) {
        setDefaultPokemons((prevPokemons) => [...prevPokemons, ...pokemonsByDefault]);
      }
    }

    if (offset) {
      fetchPokemonsByDefaultData();
    }
  }, [offset]);

  useEffect(() => {
    async function fetchPokemonsData() {
      setIsModalLoading(true);

      if (!currentPokemon.length) {
        setSelectedPokemons(defaultPokemons);
      } else {
        const pokemonByName = await fetchPokemonByName(currentPokemon);

        if (pokemonByName) {
          setSelectedPokemons(pokemonByName);
        } else {
          const selectedPokemons = defaultPokemons.filter((pokemon: IPokemonCard) => {
            return pokemon.name.includes(currentPokemon);
          });

          setSelectedPokemons(selectedPokemons);
        }
      }

      setIsModalLoading(false);
    }

    if (isModalOpen) {
      fetchPokemonsData();
    }
  }, [currentPokemon, defaultPokemons, isModalOpen]);

  useEffect(() => {
    if (isLoading) {
      if (pokemons.length > 0) {
        const lastPokemon = pokemons[pokemons.length - 1];
        setLastPokemon(lastPokemon);
        setIsToastOpen(true);
      }
    }
  }, [isLoading, pokemons]);

  return (
    <>
      <div className="flex justify-between items-center">
        <a href="/" className="w-8 h-8">
          <img src="/icons/back-arrow.svg" alt="Volver al menú principal." />
        </a>
        <h1 className="text-center text-2xl font-bold">Usuario</h1>
        <span className="w-8 h-8"></span>
      </div>

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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onScrollEnd={handleScrollEnd}
      >
        <InputField
          ref={inputRef}
          placeholder="Buscar Pokémon"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeSearch(event)}
        />
        
        <CardList data={selectedPokemons} isLoading={isModalLoading} />
      </Modal>

      <Toast isOpen={isToastOpen} onClose={() => setIsToastOpen(false)}>
        <div className="flex items-center">
          <img src={lastPokemon?.sprite} alt={lastPokemon?.name} />
          <a href={`/pokemon-detail/${lastPokemon?.id}`} className="text-center hover:underline">Ver nuevamente a {lastPokemon?.name}</a>
        </div>
      </Toast>
    </>
  )
}

export default Home;