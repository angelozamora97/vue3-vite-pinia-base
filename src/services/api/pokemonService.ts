import RestClient from "@/services/axiosClient";

const pokemonApi = {
  getData: "pokemon/",
  // SAMPLE SERVICE APIS WITH ARGUMENTS
  // getDataById: "data/",
  // createData: "data"
};

export default class PokemonService {
  // Function API Service
  async getData() {
    const response = await RestClient.axiosIns.get(pokemonApi.getData);
    return response;
  }
}
