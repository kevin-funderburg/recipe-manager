// Import database
const knex = require('./../db')

// Retrieve all books
exports.recipesAll = async (req, res) => {
  // Get all recipes from database
  knex
    .select('*') // select all records
    .from('recipes') // from 'books' table
    .then(userData => {
      // Send books extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving recipes: ${err}` })
    })
}

// Create new recipe
exports.recipesCreate = async (req, res) => {
  // Add new recipe to database
  knex('recipes')
    .insert({ // insert new record, a recipe
      'name': req.body.author,
      'ingredients': req.body.ingredients,
      'instructions': req.body.instructions,
      'description': req.body.description,
      'category': req.body.category,
      'rating': req.body.rating,
      'favorite': req.body.favorite,
      'prepTime': req.body.prepTime,
      'cookTime': req.body.cookTime,
      'source': req.body.source,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Recipe \'${req.body.name}\' created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.name} recipe: ${err}` })
    })
}

// Remove specific book
exports.booksDelete = async (req, res) => {
  // Find specific book in the database and remove it
  knex('books')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Book ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} book: ${err}` })
    })
}

// Remove all books on the list
exports.booksReset = async (req, res) => {
  // Remove all books from database
  knex
    .select('*') // select all records
    .from('books') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Book list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting book list: ${err}.` })
    })
}