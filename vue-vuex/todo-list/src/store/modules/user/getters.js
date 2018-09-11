import { isEmpty } from 'lodash'

const userLogged = state => state.userLogged
const isLogged = state => !isEmpty(state.userLogged)

export default {
  userLogged,
  isLogged
}
