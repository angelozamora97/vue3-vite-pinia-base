import { defineStore } from "pinia";

export const useMastePokemonStore = defineStore("masterPokemon", {
  state: () => ({
    name: "",
    isRegister: false,
  }),
  actions: {
    saveName(name: string) {
      this.name = name;
      this.isRegister = true;
    },
  },
  getters: {
    getName: (state) => state.name,
    getStateRegister: (state) => state.isRegister,
  },
});
