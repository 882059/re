<script setup lang="ts">
// const routes = [
//   // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
//   { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
//   // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
//   { path: '/user-:afterUser(.*)', component: UserGeneric },
// ]
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <p>
    <router-link to="/1">Page 1</router-link>
    <router-link to="/2">Page 2</router-link>
  </p>
  <router-view></router-view>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
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
