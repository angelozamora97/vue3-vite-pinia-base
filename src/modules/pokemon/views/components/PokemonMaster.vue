<template>
  <div class="pokemon-master__container">
    <template v-if="!getStatusRegister">
      <h3 class="pokemon-master__title">Welcome Pokemon Master</h3>
      <form class="pokemon-master__form" @submit.prevent="registerMaster">
        <div>Ingrese su nombre porfavor</div>
        <input v-model="nameMaster" type="text" required />
        <button type="submit">Registrar</button>
      </form>
    </template>
    <template v-else>
      <h3 class="pokemon-master__title">Welcome {{ getName }}</h3>
      <p>A continuación te mostramos los nombres de algunos pokemones</p>
      <div class="pokemon-master__list">
        <span
          v-for="(pokemon, index) in pokemons"
          :key="index"
          class="pokemon__badge"
        >
          {{ pokemon?.name || "" }}
        </span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { useMasterPokemon } from "@/composables/useMasterPokemon";
import { defineComponent, ref } from "vue";
import { Pokemon } from "../../../../models/pokemon.type";

export default defineComponent({
  props: {
    pokemons: {
      type: Array<Pokemon>,
      default: [],
    },
  },
  setup() {
    const nameMaster = ref("");
    const { saveName, getName, getStatusRegister } = useMasterPokemon();

    const registerMaster = () => {
      saveName(nameMaster.value);
    };
    return {
      // PARAMS
      nameMaster,

      // METHODS
      registerMaster,

      // COMPUTED
      getName,
      getStatusRegister,
    };
  },
});
</script>

<style scoped>
.pokemon-master__container {
  margin-top: 10px;
  padding: 10px;
}

.pokemon-master__title {
  margin-bottom: 10px;
}

.pokemon-master__form input {
  padding: 6px 10px;
  margin: 8px 0;
}

.pokemon-master__form input:focus {
  outline: none;
}

.pokemon-master__form button {
  padding: 6px 10px;
}

.pokemon-master__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
  margin-top: 5px;
}
.pokemon__badge {
  background-color: var(--color-primary);
  border-radius: 4px;
  color: white;
  padding: 8px 10px;
  margin: 8px;
}
</style>
