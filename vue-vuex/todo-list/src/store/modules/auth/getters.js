
const token = state => state.token
const user = state => state.user
const isLogged = state => !!state.token

export default {
  token,
  user,
  isLogged
}
