import store from '@/store'
import { setToken } from '@/plugins/http'

const beforeEach = (to, from, next) => {
  store.dispatch('loading/setStatus', true)

  /* Log in with a persistent login */
  if (window.localStorage.getItem('token')) {
    window.sessionStorage.setItem('token', window.localStorage.getItem('token'))
  }

  /* Log in with a persistent login */
  if (window.localStorage.getItem('user')) {
    window.sessionStorage.setItem('user', window.localStorage.getItem('user'))
  }

  const tokenSession = window.sessionStorage.getItem('token')
  const userSession = window.sessionStorage.getItem('user')

  if (tokenSession) {
    setToken(tokenSession)
  }

  /* Confirm that a user is logged in on the pages that requires login */
  if (to.meta.requiresAuth) {
    if (!userSession) {
      return next({ name: 'PageLogin' })
    }
  }

  /* If the user is authenticated and in PageLogin, redirect to PagePanel */
  if (to.name === 'PageLogin') {
    if (userSession) {
      return next({ name: 'PagePanel' })
    }
  }

  next()
}

export default beforeEach
