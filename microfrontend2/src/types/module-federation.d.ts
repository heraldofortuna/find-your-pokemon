/// <reference types="vite/client" />

declare module "find-your-pokemon/useHistorialStore" {
  interface HistorialState {
    pokemons: IPokemon[];
    addPokemon: (pokemon: IPokemon) => void;
    removePokemon: (id: number) => void;
    clearHistorial: () => void;
  }

  const useHistorialStore: () => HistorialState;

  export default useHistorialStore;
}
