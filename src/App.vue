<script setup lang="ts">
import Menu from "./components/menu.vue";
</script>

<template>
  <Menu v-show="true" />
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./style/col.scss";
@import "./style/content.scss";
</style>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
