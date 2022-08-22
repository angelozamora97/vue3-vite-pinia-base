<template>
  <div class="top-bar">
    <div class="top-bar__container">
      <div class="top-bar__image">
        <img src="@/assets/vue.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
.top-bar {
  height: 56px;
  padding: 10px;
  background-color: rgb(29, 29, 29);
}

.top-bar__container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}

.top-bar__image {
  height: 25px;
}

.top-bar__image img {
  height: 100%;
}
</style>
