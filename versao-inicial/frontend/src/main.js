import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkZhYmlvIENhcnZhbGhvIiwiZW1haWwiOiJmYWJpb0BmYWJpby5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjI3MzQ2ODQwLCJleHAiOjE2Mjc2MDYwNDB9.Cz-pHqSmj7ByNjuaTO7PNqakXnBhXoRc4qiB-zmlaPs'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')