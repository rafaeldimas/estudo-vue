const express = require('express')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

router.use(authMiddleware)

const Task = require('../models/task')
const TaskEvent = require('../events/task')

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().populate(['user', 'list'])

    res.send({ tasks })
  } catch (error) {
    res.status(400).send({ error: 'Error loading tasks' })
  }
})

router.get('/:taskId', async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId).populate(['user', 'list'])

    res.send({ task })
  } catch (error) {
    res.status(400).send({ error: 'Error loading task' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, completed, listId } = req.body

    const task = await Task.create({
      title, completed, list: listId, user: req.userId
    })

    TaskEvent.emit('assingTaskInList', { task, listId })

    task.populate(['user', 'list'])

    res.send({ task })
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: 'Error creating task' })
  }
})

router.put('/:taskId', async (req, res) => {
  try {
    const { title, completed, listId } = req.body

    const task = await Task.findByIdAndUpdate(req.params.taskId, {
      title, completed, list: listId, user: req.userId
    }, { new: true }).populate(['user', 'list'])

    res.send({ task })
  } catch (error) {
    res.status(400).send({ error: 'Error updating task' })
  }
})

router.delete('/:taskId', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.taskId)

    res.send()
  } catch (error) {
    res.status(400).send({ error: 'Error deleting task' })
  }
})

module.exports = app => app.use('/task', router)
