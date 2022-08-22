import { storeToRefs } from "pinia";
import { useMastePokemonStore } from "@/modules/pokemon/store/useMasterPokemonStore";
import { computed } from "vue";

export function useMasterPokemon() {
  const masterPokemon = useMastePokemonStore();
  const { name } = storeToRefs(masterPokemon);

  const saveName = (name: string) => {
    masterPokemon.saveName(name);
  };

  const getName = computed(() => masterPokemon.getName);
  const getStatusRegister = computed(() => masterPokemon.getStateRegister);

  return {
    // PARAMS
    name,

    // METHODS
    saveName,

    // COMPUTED
    getName,
    getStatusRegister,
  };
}
