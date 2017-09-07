const express = require('express')
const controller = require('./cep.controller')
const cepRoutes = express.Router()

cepRoutes.post('/query', controller.query)

module.exports = cepRoutes