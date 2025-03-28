import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import LevelBar from "./components/LevelBar";
import SkeletonText from "./components/SkeletonText";
import fetchPokemon from "./handlers/fetchPokemon";
import { IPokemon } from "./types/pokemon";
import formatNumber from "./utils/formatNumber";
import useHistorialStore from "find-your-pokemon/useHistorialStore";

const PokemonDetail = () => {
  const { id: pokemonId } = useParams();
  const [pokemon, setPokemonData] = useState<IPokemon>({
    id: 0,
    name: "",
    sprite: "",
    types: [],
    moves: [],
    height: "",
    weight: "",
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    }
  });
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

  return (
    <>
      <section className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-6">
          <a href="/home">
            <img src="/icons/back-arrow.svg" />
          </a>
          {
            isLoading ? (
              <SkeletonText className="w-20 h-8" />
            ) : (
              <h1 className="text-left text-2xl font-bold">{pokemon.name}</h1>
            )
          }

        </div>
        {
          isLoading ? (
            <SkeletonText className="w-12 h-7" />
          ) : (
            <span className="text-xl font-semibold">{formatNumber(pokemon.id)}</span>
          )
        }
      </section>
      
      <section className="flex items-center justify-center">
        {
          isLoading ? (
            <SkeletonText className="w-48 h-48" />
          ) : (
            <img src={pokemon.sprite} className="w-48 h-48" alt={pokemon.name} />
          )
        }
      </section>


      <section className="bg-white text-dark p-6 rounded-lg">
        <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
            <h2 className="text-center text-xl font-bold">Tipos</h2>
            <div className="flex items-center justify-center gap-6">
                {
                  isLoading ? (
                    <SkeletonText className="w-12 h-[30px]" />
                  ) : (
                    <ul className="flex items-center gap-2">
                      {
                        pokemon.types.map((move, index) => (
                          <li key={index}>
                            <p className="text-sm px-4 py-1 border rounded-2xl">{move}</p>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-center text-xl font-bold">Descripción</h2>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center justify-center gap-2">
                {
                  isLoading ? (
                    <SkeletonText className="w-12 h-6" />
                  ) : (
                    <p className="text-base font-semibold">{(Number(pokemon.weight) / 10)} kg</p>
                  )
                }
                <p className="text-gray-dark text-xs">Peso</p>
              </div>

              <span className="w-px h-16 bg-gray-light"></span>

              <div className="flex flex-col items-center justify-center gap-2">
                {
                  isLoading ? (
                    <SkeletonText className="w-12 h-6" />
                  ) : (
                    <p className="text-base font-semibold">{(Number(pokemon.height) / 10)} m</p>
                  )
                }
                <p className="text-gray-dark text-xs">Altura</p>
              </div>
              
              <span className="w-px h-16 bg-gray-light"></span>

              <div className="flex flex-col items-center justify-center gap-2">
                {
                  isLoading ? (
                    <SkeletonText className="w-12 h-6" />
                  ) : (
                    <ul>
                    {
                      pokemon.moves.slice(0, 2).map((move, index) => (
                        <li key={index}>
                          <p className="text-base font-semibold">{move}</p>
                        </li>
                      ))
                    }
                  </ul>
                  )
                }
                <p className="text-gray-dark text-xs">Movimientos</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <h2 className="text-center text-xl font-bold">Estadísticas</h2>
            <div className="w-full flex items-center gap-4">
              <div className="flex flex-col gap-1 font-bold">
                <p>HP</p>
                <p>ATK</p>
                <p>DEF</p>
                <p>SATK</p>
                <p>SDEF</p>
                <p>SPD</p>
              </div>

              <span className="w-px h-40 bg-gray-light"></span>

              {
                isLoading ? (
                  <></>
                ) : (
                  <div className="w-full flex flex-col gap-1">
                    <LevelBar value={pokemon.stats.hp} />
                    <LevelBar value={pokemon.stats.attack} />
                    <LevelBar value={pokemon.stats.defense} />
                    <LevelBar value={pokemon.stats.specialAttack} />
                    <LevelBar value={pokemon.stats.specialDefense} />
                    <LevelBar value={pokemon.stats.speed} />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PokemonDetail;
