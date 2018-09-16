const AuthEvent = require('./auth')
const ListEvent = require('./list')
const TaskEvent = require('./task')

module.exports = {
  'auth': AuthEvent,
  'list': ListEvent,
  'task': TaskEvent
}
