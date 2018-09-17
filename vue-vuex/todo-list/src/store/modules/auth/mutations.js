const setToken = (state, token) => { state.token = token }
const unsetToken = state => { state.toke = '' }

const setUser = (state, user) => { state.user = user }
const unsetUser = state => { state.user = {} }

export default {
  setToken,
  unsetToken,
  setUser,
  unsetUser
}
