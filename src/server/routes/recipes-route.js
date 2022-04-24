// Import express
const express = require('express')

// Import recipes-controller
const recipesRoutes = require('../controllers/recipes-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all book
// In server.js, recipes route is specified as '/recipes'
// this means that '/all' translates to '/recipes/all'
router.get('/all', recipesRoutes.recipesAll)

// Add route for POST request to create new book
// In server.js, recipes route is specified as '/recipes'
// this means that '/create' translates to '/recipes/create'
router.post('/create', recipesRoutes.recipesCreate)

// Add route for PUT request to delete specific book
// In server.js, recipes route is specified as '/recipes'
// this means that '/delete' translates to '/recipes/delete'
router.put('/delete', recipesRoutes.recipesDelete)

// Add route for PUT request to reset recipeshelf list
// In server.js, recipes route is specified as '/recipes'
// this means that '/reset' translates to '/recipes/reset'
router.put('/reset', recipesRoutes.recipesReset)

// Export router
module.exports = router
