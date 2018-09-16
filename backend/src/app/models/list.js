const mongoose = require('../../database')

const ListScheme = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  completed: {
    type: Boolean,
    require: true,
    default: false
  }
})

const List = mongoose.model('List', ListScheme)

module.exports = List
