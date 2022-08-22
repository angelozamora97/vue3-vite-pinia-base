import { shallowMount } from "@vue/test-utils";
import { Pokemon } from "@/models/pokemon.type";
import { createTestingPinia } from "@pinia/testing";
import PokemonMaster from "@/modules/pokemon/views/components/PokemonMaster.vue";

describe("PokemonMaster.vue", () => {
  it("renders props.msg when passed", () => {
    const pokemons: Pokemon[] = [];
    const wrapper = shallowMount(PokemonMaster, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
          }),
        ],
      },
      props: { pokemons },
    });
    expect(Array.isArray(wrapper.vm.pokemons)).toBeTruthy();
  });
});
