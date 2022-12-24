import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import router from './config/router'
import store from './config/store'

import App from './App'
import './config/msgs'

import './config/bootstrap'

Vue.config.productionTip = false

// TEMPORARIO

require('axios').defaults.headers.common['Authorization'] = 'bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IldpbHNvbiBFdmFuZ2VsaXN0YSAiLCJlbWFpbCI6IndpbHNvbi5ldmFuZ2VsaXN0YTIyQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzE4MjI4ODcsImV4cCI6MTY3MjA4MjA4N30.Xddk0TqGSlSRJwHyVZ-hnZDEBRSKu2dxyFqgAT5wu-o'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')