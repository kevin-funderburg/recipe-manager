// recipe-manager/server/routes/recipes-route.js

// Import express
const express = require('express')

// Import recipes-controller
const recipesRoutes = require('./../controllers/recipes-controller.js')

// Create router
const recipeRouter = express.Router()

// Add route for GET request to retrieve all recipes
// In server.js, recipes route is specified as '/recipes'
// this means that '/all' translates to '/recipes/all'
recipeRouter.get('/all', recipesRoutes.recipesAll)

// Add route for POST request to create new recipe
// In server.js, recipes route is specified as '/recipes'
// this means that '/create' translates to '/recipes/create'
recipeRouter.post('/create', recipesRoutes.recipesCreate)

// Add route for PUT request to delete specific recipe
// In server.js, recipes route is specified as '/recipes'
// this means that '/delete' translates to '/recipes/delete'
recipeRouter.put('/delete', recipesRoutes.recipesDelete)

// Add route for PUT request to delete specific recipe
// In server.js, recipes route is specified as '/recipes'
// this means that '/delete' translates to '/recipes/delete'
recipeRouter.put('/addToGrocery', recipesRoutes.recipesAddToGrocery)

// Add route for PUT request to reset recipes list
// In server.js, recipes route is specified as '/recipes'
// this means that '/reset' translates to '/recipes/reset'
recipeRouter.put('/reset', recipesRoutes.recipesReset)

// Export recipeRouter
module.exports = recipeRouter