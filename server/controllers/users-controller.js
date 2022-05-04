// recipe-manager/server/controllers/users-controller.js

// Import database
const knex = require('../db')

// Retrieve all users
exports.usersAll = async (req, res) => {
  // Get all users from database
  knex
    .select('*') // select all records
    .from('users') // from 'users' table
    .then(userData => {
      // Send users extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

// Create new user
exports.usersCreate = async (req, res) => {
  // Add new user to database
  knex('users')
    .insert({ // insert new record, a user
      'id': req.body.id,
      'email': req.body.email,
      'password': req.body.password,
      'firstName': req.body.firstName,
      'lastName': req.body.lastName,
      'location': req.body.location,
      'contact': req.body.contact,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `User \'${req.body.firstName}\' with id ${req.body.id} added.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error adding ${req.body.firstName} user: ${err}` })
    })
}

// Remove specific user
exports.usersDelete = async (req, res) => {
  // Find specific user in the database and remove it
  knex('users')
    .where('email', req.body.email) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `User ${req.body.email} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.email} user: ${err}` })
    })
}