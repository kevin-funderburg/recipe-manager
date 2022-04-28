// download-manager/server/routes/download-route.js

// Import express
const express = require('express')

// Import download-controller
const downloadRoutes = require('../controllers/download-controller.js')

// Create router
const downloadRouter = express.Router()

// Add route for GET request to retrieve all download
// In server.js, download route is specified as '/download'
// this means that '/all' translates to '/download/all'
// downloadRouter.get('/callscript', downloadRoutes.callscript)
downloadRouter.post('/callscript', downloadRoutes.callscript)

// Add route for POST request to create new download
// In server.js, download route is specified as '/download'
// this means that '/create' translates to '/download/create'
downloadRouter.post('/create', downloadRoutes.downloadCreate)

// Add route for PUT request to delete specific download
// In server.js, download route is specified as '/download'
// this means that '/delete' translates to '/download/delete'
downloadRouter.put('/delete', downloadRoutes.downloadDelete)

// Add route for PUT request to reset download list
// In server.js, download route is specified as '/download'
// this means that '/reset' translates to '/download/reset'
downloadRouter.put('/reset', downloadRoutes.downloadReset)

// Export downloadRouter
module.exports = downloadRouter