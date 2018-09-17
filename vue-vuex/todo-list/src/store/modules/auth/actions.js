import { auth } from '@/api'

const register = async ({ commit }, payload) => {
  const data = await auth.register(payload)

  if (data.error) {
    throw new Error(data)
  }

  commit('setUser', data.user)
  commit('setToken', data.token)

  window.sessionStorage.setItem('token', data.token)
  window.sessionStorage.setItem('user', JSON.stringify(data.user))

  if (payload.remenber) {
    window.localStorage.setItem('token', data.token)
    window.localStorage.setItem('user', JSON.stringify(data.user))
  }

  return data
}

const login = async ({ commit }, payload) => {
  const data = await auth.login(payload)

  if (data.error) {
    throw new Error(data)
  }

  commit('setUser', data.user)
  commit('setToken', data.token)

  window.sessionStorage.setItem('token', data.token)
  window.sessionStorage.setItem('user', JSON.stringify(data.user))

  if (payload.remenber) {
    window.localStorage.setItem('token', data.token)
    window.localStorage.setItem('user', JSON.stringify(data.user))
  }

  return data
}

const logout = ({ commit }) => commit('unsetUser') || commit('unsetToken')

export default {
  register,
  login,
  logout
}
