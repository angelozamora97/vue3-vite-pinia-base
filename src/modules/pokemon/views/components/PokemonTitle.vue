<template>
  <div class="pokemon__image">
    <img src="@/assets/images/pokemon-logo.png" alt="" />
  </div>
  <h3>VUE3 + VITE + PINIA</h3>
  <h3>V.1.0</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.pokemon__image {
  height: 110px;
}

.pokemon__image img {
  height: 100%;
}
</style>
