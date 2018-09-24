import { http } from '@/plugins/http'
import { getData } from '@/utils/get'

const module = 'auth'

const login = async ({ email, password }) => http.post(`${module}/login`, { email, password }).then(res => getData(res, {}))

const register = async ({ name, email, password }) => http.port(`${module}/register`, { name, email, password }).then(res => getData(res, {}))

export default {
  login,
  register
}
