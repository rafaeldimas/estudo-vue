import { http } from '@/plugins/http'

const module = 'auth'

const login = async ({ email, password }) => http.post(`${module}/login`, { email, password })

const register = async ({ name, email, password }) => http.port(`${module}/register`, { name, email, password })

export default {
  login,
  register
}
