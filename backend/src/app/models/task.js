const mongoose = require('../../database')

const TaskScheme = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
    require: true
  },
  completed: {
    type: Boolean,
    require: true,
    default: false
  }
})

const Task = mongoose.model('Task', TaskScheme)

module.exports = Task
