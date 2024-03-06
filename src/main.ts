import { computed, createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'
import { profile, useStatusStore } from '@/use'
import App from '@/App.vue'
import router, { currentRoute } from '@/router'
import { useTitle } from '@vueuse/core'

const pinia = createPinia()
const stateStore = useStatusStore(pinia)
const app = createApp(App)

router.beforeEach((to) => {
  if (!to.fullPath.includes('#')) {
    stateStore.setLoading(true)
  }
  stateStore.RouteDestiny(to.fullPath)
})
router.afterEach((_to, _from, failure) => {
  stateStore.setLoading(false)
  if (failure) {}
  nextTick(() => {
    stateStore.updateHeadings()
  })
})
router.onError((err) => {
  console.log(err)
  if (err.toString().includes('Failed to fetch')) {
    window.location.href = stateStore.to
  }
})

useTitle(
  computed(() => {
    if (!currentRoute.value) return profile.TEAM_NAME
    return currentRoute.value + ' | ' + profile.TEAM_NAME
  })
)

app.use(pinia)
app.use(router)
app.mount('#app')
