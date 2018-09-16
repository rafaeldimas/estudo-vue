const Task = require('../../models/task')

const delTasksFromList = async (listId) => {
  await Task.deleteMany({ list: listId })
}

module.exports = {
  delTasksFromList
}
