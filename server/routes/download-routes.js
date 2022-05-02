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

// Export downloadRouter
module.exports = downloadRouter