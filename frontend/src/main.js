import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import router from './config/router'
import store from './config/store'
import LiquorTree from './config/LiquorTree'
import './config/axios'

import App from './App'
import './config/msgs'
import './config/mq'

import './config/bootstrap'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  LiquorTree,
  render: h => h(App)
}).$mount('#app')