export interface IPokemon {
  id: number;
  name: string;
  sprite: string;
  types: string[];
  moves: string[];
  height: string;
  weight: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

export type IPokemonCard = Pick<IPokemon, "id" | "name" | "sprite">;