const express = require('express')
const routes = express.Router()

//Controllers
const LoginController = require('./controllers/LoginController')
const AccountController = require('./controllers/AccountController')

routes.post('/login', LoginController.store)
routes.get('/conta', AccountController.show)

module.exports = routes