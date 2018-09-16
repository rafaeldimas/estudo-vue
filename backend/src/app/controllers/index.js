const Auth = require('./AuthController')
const List = require('./ListController')
const Task = require('./TaskController')

module.exports = app => {
  Auth(app)
  List(app)
  Task(app)
}
