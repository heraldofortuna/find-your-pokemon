import apiClient from "../apiClient";

async function PokemonService(url: string) {
  try {
    const response = await apiClient.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error en PokemonService:", error);
    throw new Error("No se pudo obtener la información del Pokémon");
  }
}

export default PokemonService;