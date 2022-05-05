// recipe-manager/server/db.js

// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// Create a table in the database called "recipes"
knex.schema
  // Make sure no "recipes" table exists
  // before trying to create new
  .hasTable('recipes')
    .then((exists) => {
      if (!exists) {
        // If no "recipes" table exists
        // and use "id" as a primary identification
        // and increment "id" with every new record (recipe)
        return knex.schema.createTable('recipes', (table)  => {
          table.increments('id').primary()
          table.string('name')
          table.string('description')
          table.string('ingredients')
          table.string('directions')
          table.string('link')
          table.integer('prep_time')
          table.integer('cook_time')
          table.string('category')
          table.boolean('favorite')
          table.integer('rating')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Recipe\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Create a table in the database called "grocerylist"
knex.schema
// Make sure no "grocerylist" table exists
// before trying to create new
    .hasTable('grocerylist')
    .then((exists) => {
      if (!exists) {
        // If no "grocerylist" table exists
        // create new, with "id", "name" 
        // and use "id" as a primary identification
        // and increment "id" with every new record (item)
        return knex.schema.createTable('grocerylist', (table)  => {
          table.increments('id').primary()
          table.string('name')
        })
        .then(() => {
          // Log success message
          console.log('Table \'GroceryList\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Create a table in the database called "users"
knex.schema
  // Make sure no "users" table exists
  // before trying to create new one
  .hasTable('users')
    .then((exists) => {
      if (!exists) {
        // If no "users" table exists
        // use "id" as a primary identification
        // and increment "id" with every new record (user)
        return knex.schema.createTable('users', (table)  => {
          table.increments('id').primary()
          table.string('email')
          table.string('password')
          table.string('firstName')
          table.string('lastName')
          table.string('location')
          table.string('contact')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Users\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('Setting up database done.')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Create a table in the database called "instock"
knex.schema
// Make sure no "instock" table exists
// before trying to create new
    .hasTable('instock')
    .then((exists) => {
      if (!exists) {
        // If no "instock" table exists
        // create new, with "itemid" and "instock" column
        // and increment "itemid" with every new record (recipe)
        return knex.schema.createTable('instock', (table)  => {
          table.increments('itemid').primary()
          table.integer('instock')
        })
        .then(() => {
          // Log success message
          console.log('Table \'InStock\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Log all data in "recipes" table
// knex.select('*').from('recipes')
//   .then(data => console.log('Recipes Data:', data))
//   .catch(err => console.log(err))
  
// Log all data in "grocerylist" table
// knex.select('*').from('grocerylist')
//   .then(data => console.log('Grocery List Data:', data))
//   .catch(err => console.log(err))

// Log all data in "users" table
knex.select('*').from('users')
.then(data => console.log('Users Data:', data))
.catch(err => console.log(err))

// Export the database
module.exports = knex