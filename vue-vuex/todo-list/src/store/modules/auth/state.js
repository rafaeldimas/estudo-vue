export default {
  token: window.sessionStorage.getItem('token') || '',
  user: (window.sessionStorage.getItem('user') && JSON.parse(window.sessionStorage.getItem('user'))) || {}
}
