import apiClient from "../apiClient";

async function PokemonsByTypeService(type: string) {
  try {
    const response = await apiClient.get(`https://pokeapi.co/api/v2/type/${type}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error en PokemonsByTypeService:", error);
    throw new Error("No se pudo obtener la información de los Pokémones por tipo");
  }
}

export default PokemonsByTypeService;