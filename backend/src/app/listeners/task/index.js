const List = require('../../models/list')

const assingTaskInList = async ({ task, listId }) => {
  const list = await List.findById(listId)

  list.tasks.push(task)

  await list.save()
}

module.exports = {
  assingTaskInList
}
