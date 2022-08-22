<template>
  <component :is="component">
    <router-view></router-view>
  </component>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const component = ref("page-layout");
    const route = useRoute();

    watch(route, (newRoute) => {
      component.value = newRoute.meta?.layout + "" || "page-layout";
    });
    return {
      component,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
