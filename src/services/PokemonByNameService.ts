import apiClient from "../apiClient";

async function PokemonByNameService(name: string) {
  try {
    const response = await apiClient.get(`/pokemon/${name}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error en PokemonByNameService:", error);
    throw new Error("No se pudo obtener la información de los Pokémones por nombre");
  }
}

export default PokemonByNameService;