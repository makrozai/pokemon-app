import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const DEFAULT_TITLE = 'Pokemon'

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title + ' - ' + DEFAULT_TITLE || DEFAULT_TITLE
  })
})


export default router
