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

</style>
