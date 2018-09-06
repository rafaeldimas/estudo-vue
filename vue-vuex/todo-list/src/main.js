import Vue from 'vue'
import Root from './Root'
import router from './router'
import store from './store'
import httpPlugin from './plugins/http'

import { fa } from './config'

/* Component FontAwesomeIcon */
Vue.component('font-awesome-icon', fa)

/* Plugin $http from axios */
Vue.use(httpPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  components: { Root },
  template: '<Root/>'
})
