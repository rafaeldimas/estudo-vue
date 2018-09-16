const express = require('express')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

router.use(authMiddleware)

const List = require('../models/list')

router.get('/', async (req, res) => {
  try {
    const lists = await List.find().populate(['user', 'tasks'])

    return res.send({ lists })
  } catch (error) {
    return res.status(400).send({ error: 'Error loading Lists' })
  }
})

router.get('/:listId', async (req, res) => {
  try {
    const list = await List.findById(req.params.listId).populate(['user', 'tasks'])

    return res.send({ list })
  } catch (error) {
    return res.status(400).send({ error: 'Error loading List' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, description, completed } = req.body

    const list = await List.create({ title, description, completed, user: req.userId })

    return res.send({ list })
  } catch (error) {
    return res.status(400).send({ error: 'Error creating new list' })
  }
})

router.put('/:listId', async (req, res) => {
  try {
    const { title, description, completed } = req.body

    const list = await List.findByIdAndUpdate(req.params.listId, {
      title, description, completed
    }, { new: true })

    return res.send({ list })
  } catch (error) {
    return res.status(400).send({ error: 'Error updating list' })
  }
})

router.delete('/:listId', async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.listId)

    return res.send()
  } catch (error) {
    return res.status(400).send({ error: 'Error deleting list' })
  }
})

module.exports = app => app.use('/list', router)
