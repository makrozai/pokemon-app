import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * -----------------------------------------
 *  Import Libraries for project
 * -----------------------------------------
 */
 import './plugins/veeValidate'
 // import './plugins/vueCookies'
 import './plugins/vueJsModal'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
