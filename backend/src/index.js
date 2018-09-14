const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./app/controllers')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

controllers(app)

app.listen(3000)
