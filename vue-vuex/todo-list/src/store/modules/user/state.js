export default {
  userLogged: (window.sessionStorage.getItem('user') && JSON.parse(window.sessionStorage.getItem('user'))) || {}
}
