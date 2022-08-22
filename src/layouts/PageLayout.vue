<template>
  <div>
    <top-bar></top-bar>
    <div class="body__container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "@/common/components/TopBar.vue";

export default defineComponent({
  name: "PageLayout",
  components: {
    TopBar,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.body__container {
  padding-top: 20px;
}
</style>
