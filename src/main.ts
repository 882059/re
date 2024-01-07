import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import P1 from './components/Page1.vue'
import P2 from './components/Page2.vue'
import H0 from './components/home.vue'
import { createPinia } from 'pinia'
import { computed } from 'vue';

const routes = [
  { path: '/', component: H0 },
  { path: '/1', component: P1 },
  { path: '/2', component: P2 },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        behavior: 'auto'
      }
    }
  },
});

export default router

export const currentRoute = computed(() => {
  return <string>router.currentRoute.value.name
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
