// recipe-manager/server/controllers/recipes-controller.js

// Import database
const knex = require('../db')

// Retrieve all recipes
exports.recipesAll = async (req, res) => {
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
exports.recipesCreate = async (req, res) => {
  // Add new recipe to database
  knex('recipes')
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

// Create new recipe
exports.recipesAddToGrocery = async (req, res) => {
  // Add new recipe to database
  knex('grocerylist')
    .insert({ // insert new record, a recipe
      'name': req.body.ingredients,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Ingredients \'${req.body.ingredients}\' added to grocery list.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error adding ${req.body.ingredients} grocery item: ${err}` })
    })
}

// // Create new recipe
// exports.recipesAddToGrocery = async (req, res) => {
//   // Add new recipe to database
//   knex('grocerylist')
//     .insert({ // insert new record, a recipe
//       'name': req.body.ingredients,
//     })
//     .then(() => {
//       // Send a success message in response
//       res.json({ message: `Ingredients \'${req.body.ingredients}\' added to grocery list.` })
//     })
//     .catch(err => {
//       // Send a error message in response
//       res.json({ message: `There was an error adding ${req.body.ingredients} grocery item: ${err}` })
//     })
// }

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

// Remove specific recipe
exports.recipesAddToGrocery = async (req, res) => {
    console.log('in recipes-controller exports.recipesAddToGrocery')
    console.log(`id is: ${req.body.id}`)
    const {spawn} = require('child_process');

    const childPython = spawn('python3', ['src/modules/forms/recipes/addToGroceryList.py', req.body.id]);

    childPython.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
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