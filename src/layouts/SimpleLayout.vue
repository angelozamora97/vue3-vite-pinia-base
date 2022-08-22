<template>
  <h1>Simple</h1>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SimpleLayout",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
