<template>
  <div>
    <pokemon-title></pokemon-title>
  </div>

  <pokemon-master :pokemons="pokemons"></pokemon-master>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PokemonTitle from "./components/PokemonTitle.vue";
import PokemonMaster from "./components/PokemonMaster.vue";
import PokemonService from "@/services/api/pokemonService";
import { Pokemon } from "@/models/pokemon.type";

const pokemonService = new PokemonService();

export default defineComponent({
  name: "HomeView",
  components: {
    PokemonTitle,
    PokemonMaster,
  },
  async setup() {
    const pokemons = ref<Pokemon[]>([]);

    const getPokemons = async () => {
      const {
        data: { results: pokemonList },
      } = await pokemonService.getData();
      pokemons.value = pokemonList;
    };

    await getPokemons();

    return {
      pokemons,
    };
  },
});
</script>

<style scoped></style>
