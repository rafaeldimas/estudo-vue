import store from '../store'

const beforeEach = (to, from, next) => {
  /* Log in with a persistent login */
  if (window.localStorage.getItem('user')) {
    window.sessionStorage.setItem('user', window.localStorage.getItem('user'))
  }

  const userSession = window.sessionStorage.getItem('user')

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

  store.dispatch('loading/setStatus', true)

  next()
}

export default beforeEach
