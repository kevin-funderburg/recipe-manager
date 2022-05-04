// recipe-manager/server/routes/users-route.js

// Import express
const express = require('express')

// Import users-controller
const usersRoutes = require('./../controllers/users-controller.js')

// Create router
const usersRouter = express.Router()

// Add route for GET request to retrieve all users
// In server.js, users route is specified as '/users'
// this means that '/all' translates to '/users/all'
usersRouter.get('/all', usersRoutes.usersAll)

// Add route for POST request to create new user
// In server.js, users route is specified as '/users'
// this means that '/create' translates to '/users/create'
usersRouter.post('/create', usersRoutes.usersCreate)

// Add route for PUT request to create new user
// In server.js, users route is specified as '/users'
// this means that '/delete' translates to '/users/delete'
usersRouter.put('/delete', usersRoutes.usersDelete)

// Export usersRouter
module.exports = usersRouter