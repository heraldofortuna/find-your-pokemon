import apiClient from "../apiClient";

async function PokemonsByDefaultService(limit = 30, offset = 0) {
  try {
    const response = await apiClient.get(`/pokemon?limit=${limit}&offset=${offset}`);
    const data = response.data.results;
    return data;
  } catch (error) {
    console.error("Error en PokemonsByDefaultService:", error);
    throw new Error("No se pudo obtener la información de los Pokémones por defecto");
  }
}

export default PokemonsByDefaultService;