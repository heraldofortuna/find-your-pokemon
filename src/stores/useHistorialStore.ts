import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IPokemon } from "../types/pokemon";

interface HistorialState {
  pokemons: IPokemon[];
  addPokemon: (pokemon: IPokemon) => void;
  removePokemon: (id: number) => void;
  clearHistorial: () => void;
}

const useHistorialStore = create<HistorialState>()(
  persist(
    (set) => ({
      pokemons: [],
      addPokemon: (pokemon) =>
        set((state) => {
          const filteredPokemons = state.pokemons.filter((p) => p.id !== pokemon.id);
          return { pokemons: [...filteredPokemons, pokemon] };
        }),
      removePokemon: (id) =>
        set((state) => ({
          pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
        })),
      clearHistorial: () => set({ pokemons: [] }),
    }),
    { name: "historial-pokemon" }
  )
);

export default useHistorialStore;