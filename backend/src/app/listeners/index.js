const AuthListerers = require('./auth')
const ListListerers = require('./list')
const TaskListerers = require('./task')

module.exports = {
  'auth': AuthListerers,
  'list': ListListerers,
  'task': TaskListerers
}
