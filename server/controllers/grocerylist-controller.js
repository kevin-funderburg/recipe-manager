// recipe-manager/server/controllers/grocerylist-controller.js

// Import database
const knex = require('../db')

// Retrieve all groceries
exports.groceryItemAll = async (req, res) => {
  // Get all groceries from database
  knex
    .select('*') // select all records
    .from('grocerylist') // from 'grocerylist' table
    .then(userData => {
      // Send groceries extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving groceries: ${err}` })
    })
}

// Create new grocery item
exports.groceryItemCreate = async (req, res) => {
  // Add new grocery item to database
  knex('grocerylist')
    .insert({ // insert new record, a grocery item
      'id': req.body.id,
      'name': req.body.name,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Grocery item \'${req.body.name}\' with id ${req.body.id} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.name} grocery item: ${err}` })
    })
}

// Remove specific Grocery item
exports.groceryItemDelete = async (req, res) => {
  // Find specific item in the database and remove it
  knex('grocerylist')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Grocery item ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} item: ${err}` })
    })
}