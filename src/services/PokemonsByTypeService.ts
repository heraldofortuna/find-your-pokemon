async function PokemonsByTypeService(type: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();
  return data;
}

export default PokemonsByTypeService;