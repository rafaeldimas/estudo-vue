import { user } from '@/api'

const login = async ({ commit }, payload) => {
  try {
    const userData = await user.getUser(payload)
    if (!userData) {
      throw new Error('User data not found')
    }

    commit('setUserLogged', userData)

    if (payload.remenber) {
      window.localStorage.setItem('user', JSON.stringify(userData))
    }

    return { status: true, userData }
  } catch (error) {
    return { status: false, error }
  }
}

const logout = ({ commit, getters }) => getters.isLogged() ? commit('unsetUserLogged') : false

export default {
  login,
  logout
}
