import apiClient from "../apiClient";

async function PokemonsByDefaultService() {
  try {
    const response = await apiClient.get('/pokemon?limit=30&offset=0');
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error en PokemonsByDefaultService:", error);
    throw new Error("No se pudo obtener la información de los Pokémones por defecto");
  }
}

export default PokemonsByDefaultService;