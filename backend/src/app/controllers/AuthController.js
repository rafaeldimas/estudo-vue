const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { secret } = require('../../config/auth')

const User = require('../models/user')

function generateToken (params = {}) {
  return jwt.sign(params, secret, {
    expiresIn: 86400
  })
}

router.post('/register', async (req, res) => {
  const { email } = req.body

  try {
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: 'User already exists' })
    }

    const user = await User.create(req.body)

    user.password = undefined

    return res.send({
      user,
      token: generateToken({ id: user.id })
    })
  } catch (error) {
    return res.status(400).send({ error: 'Registration failed' })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.status(400).send({ error: 'User not found' })
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Invalid password' })
    }

    user.password = undefined

    return res.send({
      user,
      token: generateToken({ id: user.id })
    })
  } catch (error) {
    return res.status(400).send({ error: 'Login failed' })
  }
})

module.exports = app => app.use('/auth', router)
