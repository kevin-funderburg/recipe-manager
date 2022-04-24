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

// Just for debugging purposes:
// Log all data in "recipes" table
knex.select('*').from('recipes')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex