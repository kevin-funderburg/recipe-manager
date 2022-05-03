// recipe-manager/server/controllers/recipes-controller.js

// Import database
const knex = require('../db')

// Retrieve all recipes
exports.usersAll = async (req, res) => {
  // Get all recipes from database
  knex
    .select('*') // select all records
    .from('recipes') // from 'recipes' table
    .then(userData => {
      // Send recipes extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving recipes: ${err}` })
    })
}

// Create new recipe
exports.usersPassword = async (req, res) => {
  // Add new recipe to database
  knex('users')
    .insert({ // insert new record, a recipe
      'id': req.body.id,
      'name': req.body.name,
      'description': req.body.description,
      'ingredients': req.body.ingredients,
      'directions': req.body.directions,
      'link': req.body.link,
      'prep_time': req.body.prep_time,
      'cook_time': req.body.cook_time,
      'category': req.body.category,
      'favorite': req.body.favorite,
      'rating': req.body.rating
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Recipe \'${req.body.name}\' with id ${req.body.id} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.name} recipe: ${err}` })
    })
}

// Remove specific recipe
exports.recipesDelete = async (req, res) => {
  // Find specific recipe in the database and remove it
  knex('recipes')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Recipe ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} recipe: ${err}` })
    })
}

// Remove all recipes on the list
exports.recipesReset = async (req, res) => {
  // Remove all recipes from database
  knex
    .select('*') // select all records
    .from('recipes') // from 'recipes' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Recipe List cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error clearing the Recipe List: ${err}.` })
    })
}