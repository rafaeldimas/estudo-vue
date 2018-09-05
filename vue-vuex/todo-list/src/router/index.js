import Vue from 'vue'
import Router from 'vue-router'

/* Pages */
import PageLogin from '@/pages/Login/Login'
import PagePanel from '@/pages/Panel/Panel'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'PageLogin', component: PageLogin },
    { path: '/panel', name: 'PagePanel', component: PagePanel }
  ]
})
