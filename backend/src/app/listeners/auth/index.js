const jwt = require('jsonwebtoken')

const { secret, expiresIn } = require('../../../config/auth')

const generateToken = function (params = {}) {
  this.token = jwt.sign(params, secret, { expiresIn })
}

module.exports = {
  generateToken
}
