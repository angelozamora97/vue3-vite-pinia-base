<template>
  <div class="router__container">
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
  <div v-if="error != ''">{{ error }}</div>
  <suspense v-else>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback>
      <loading />
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from "vue";
import Loading from "@/common/components/Loading.vue";

export default defineComponent({
  components: {
    Loading,
  },
  setup() {
    const error = ref("");
    onErrorCaptured((e) => {
      error.value = e.message;
      return true;
    });
    return { error };
  },
});
</script>

<style scoped>
.router__container {
  text-align: center;
  padding: 10px 0;
}
</style>
