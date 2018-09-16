const List = require('../../models/list')

const assingTaskInList = async ({ task, listId }) => {
  const tasks = Array.isArray(task) ? task : [ task ]
  const list = await List.findById(listId)

  tasks.map(item => list.tasks.push(item._id))

  await list.save()
}

module.exports = {
  assingTaskInList
}
