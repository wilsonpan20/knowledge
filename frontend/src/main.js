import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import router from './config/router'
import store from './config/store'

import App from './App'

import './config/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')