import { user } from '@/api'

const login = async ({ commit }, payload) => {
  const userData = await user.getUser(payload)

  if (!userData) {
    throw new Error('User data not found')
  }

  commit('setUserLogged', userData)
  window.sessionStorage.setItem('user', JSON.stringify(userData))

  if (payload.remenber) {
    window.localStorage.setItem('user', JSON.stringify(userData))
  }
  return userData
}

const logout = ({ commit, getters }) => getters.isLogged() ? commit('unsetUserLogged') : false

export default {
  login,
  logout
}
