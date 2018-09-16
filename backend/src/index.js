const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./app/controllers')
const eventsMiddlewares = require('./app/middlewares/event')

const app = express()

app.use(eventsMiddlewares)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

controllers(app)

app.listen(3000)
