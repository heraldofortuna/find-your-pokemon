import HistorialCard from "./components/HistorialCard";
import { IPokemon } from "./types/pokemon";
import useHistorialStore from "find-your-pokemon/useHistorialStore";

const PokemonHistorial = () => {
  const { pokemons, clearHistorial } = useHistorialStore();

  function removeHistorial() {
    clearHistorial();
    window.location.href = "/home";
  }

  return (
    <>
      <section className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-6">
          <a href="/home">
            <img src="/icons/back-arrow.svg" />
          </a>
          <h1 className="text-left text-2xl font-bold">Historial</h1>
        </div>
      </section>
  
      <section>
        <ul className="flex flex-col gap-4">
          {
            pokemons.reverse().map((pokemon: IPokemon) => {
              return (
                <HistorialCard data={pokemon} />
              )
            })
          }
        </ul>
      </section>
      
      {
        pokemons.length > 0 ? (
          <section className="flex items-center justify-center mt-auto">
            <span className="text-gray-light text-center text-md hover:underline" onClick={removeHistorial}>Eliminar historial</span>
          </section>
        ) : (
          <section className="my-auto">
            <p className="text-center">No has visto pokemones aún</p>
          </section>
        )
      }
    </>
  )
}

export default PokemonHistorial;
