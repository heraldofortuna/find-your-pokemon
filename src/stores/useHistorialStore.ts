import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Pokemon {
  id: number;
  name: string;
}

interface HistorialState {
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (id: number) => void;
  clearHistorial: () => void;
}

const useHistorialStore = create<HistorialState>()(
  persist(
    (set) => ({
      pokemons: [],

      addPokemon: (pokemon) =>
        set((state) => {
          const exists = state.pokemons.some((p) => p.id === pokemon.id);
          return exists ? state : { pokemons: [...state.pokemons, pokemon] };
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