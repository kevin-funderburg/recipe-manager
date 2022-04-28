// recipe-manager/server/routes/grocerylist-route.js

// Import express
const express = require('express')

// Import grocerylist-controller
const groceriesRoutes = require('../controllers/grocerylist-controller.js')

// Create router
const groceryRouter = express.Router()

// Add route for GET request to retrieve groceries
// In server.js, groceries route is specified as '/groceries'
// this means that '/all' translates to '/groceries/all'
groceryRouter.get('/all', groceriesRoutes.groceryItemAll)

// Add route for POST request to create new grocery item
// In server.js, groceries route is specified as '/groceries'
// this means that '/create' translates to '/groceries/create'
groceryRouter.post('/create', groceriesRoutes.groceryItemCreate)

// Add route for PUT request to delete specific grocery item
// In server.js, groceries route is specified as '/groceries'
// this means that '/delete' translates to '/groceries/delete'
groceryRouter.put('/delete', groceriesRoutes.groceryItemDelete)

// Export groceryRouter
module.exports = groceryRouter