import { routes, headings } from '@/router/routes';
import { profile } from '@/use';
import { computed } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// routes.push({
//   path: '/' + profile.teamName + '/maze', name: 'Maze',
//   beforeEnter: () => {
//     window.location.href = 'https://2023.igem.wiki/zjut-china/maze/'
//   }
// })

routes.push({ path: '/:pathMatch(.*)*', redirect: '/' + profile.teamName + '/' })

// headings.Awards = { ...(headings.Awards as object), 'Maze': '' } as any;

export const Headings = headings

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(_to, _from, savedPosition) {
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