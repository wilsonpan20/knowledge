import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import router from './config/router'
import store from './config/store'
import LiquorTree from './config/LiquorTree'

import App from './App'
import './config/msgs'

import './config/bootstrap'

Vue.config.productionTip = false

// TEMPORARIO

require('axios').defaults.headers.common['Authorization'] = 'bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IldpbHNvbiBFdmFuZ2VsaXN0YSAiLCJlbWFpbCI6IndpbHNvbi5ldmFuZ2VsaXN0YTIyQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzIzNTg2NzEsImV4cCI6MTY3MjYxNzg3MX0.dk8ceEi1KZG1F3gw209q5uvfl86Oyf30zERZrDV5tOo'

new Vue({
  router,
  store,
  LiquorTree,
  render: h => h(App)
}).$mount('#app')