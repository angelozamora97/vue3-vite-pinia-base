<template>
  <div>
    <span>Hola como estas {{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
