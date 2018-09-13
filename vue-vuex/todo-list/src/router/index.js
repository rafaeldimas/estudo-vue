import Vue from 'vue'
import Router from 'vue-router'

/* Hooks */
import beforeEach from './beforeEach'
import afterEach from './afterEach'

/* Pages */
import PageLogin from '@/pages/Login/PageLogin'
import PagePanel from '@/pages/Panel/PagePanel'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'PageLogin',
      component: PageLogin
    },
    {
      path: '/panel',
      name: 'PagePanel',
      component: PagePanel,
      meta: {
        requiresAuth: true
      }
    }
  ],
  mode: 'history'
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
