/// <reference types="vite/client" />

declare module "find-your-pokemon/useHistorialStore" {
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

  const useHistorialStore: () => HistorialState;

  export default useHistorialStore;
}
