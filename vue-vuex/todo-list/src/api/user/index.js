import { http } from '@/plugins/http'

const module = 'users'

const getUsers = async () => http.get(module)
const getUser = ({ username, email }) => getUsers().find((user) => user.username === username && user.email === email)

export default {
  getUsers,
  getUser
}
