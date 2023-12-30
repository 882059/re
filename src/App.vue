<script setup lang="ts">
import Menu from "./components/menu.vue";
import Sidebar from "./components/sidebar.vue";
</script>

<template>
  <Menu v-show="true" />
  <div class="">
    <Sidebar v-show="true" />
  </div>
  <div>
    <router-view></router-view>
  </div>
  <!-- <Sidebar v-show="true" /> -->
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
