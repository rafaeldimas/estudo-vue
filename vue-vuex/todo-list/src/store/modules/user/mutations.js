const setUserLogged = (state, user) => { state.userLogged = user }
const unsetUserLogged = state => { state.userLogged = {} }

export default {
  setUserLogged,
  unsetUserLogged
}
