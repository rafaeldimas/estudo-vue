import Vue from 'vue'
import Router from 'vue-router'

/* Pages */
import PageLogin from '@/pages/Login/PageLogin'
import PagePanel from '@/pages/Panel/PagePanel'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'PageLogin', component: PageLogin },
    { path: '/panel', name: 'PagePanel', component: PagePanel }
  ]
})
