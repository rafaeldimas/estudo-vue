import { http } from '@/plugins/http'

const module = 'users'

const getUsers = async () => {
  const users = await http.get(module)
  return users
}

const getUser = async ({ username, email }) => {
  const users = await getUsers()
  return users.data.find((user) => user.username === username && user.email === email)
}

//

export default {
  getUsers,
  getUser
}
