import { user } from '@/api'

const login = async ({ commit }, payload) => {
  const userData = await user.getUser(payload)
  if (userData) {
    commit('setUserLogged', userData)
    if (payload.remenber) {
      window.localStorage.setItem('user', JSON.stringify(userData))
    }
  }
}

const logout = ({ commit, getters }) => getters.isLogged() ? commit('unsetUserLogged') : false

export default {
  login,
  logout
}
