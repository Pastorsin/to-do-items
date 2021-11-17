import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'

require('./assets/reset.css');

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
