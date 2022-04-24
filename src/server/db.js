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

// Create a table in the database called "books"
knex.schema
  // Make sure no "books" table exists
  // before trying to create new
  .hasTable('books')
    .then((exists) => {
      if (!exists) {
        // If no "books" table exists
        // create new, with "id", "author", "title",
        // "pubDate" and "rating" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (book)
        return knex.schema.createTable('books', (table)  => {
          table.increments('id').primary()
          table.integer('author')
          table.string('title')
          table.string('pubDate')
          table.integer('rating')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Books\' created')
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

// Create a table in the database called "recipes"
knex.schema
// Make sure no "recipes" table exists
// before trying to create new
    .hasTable('recipes')
    .then((exists) => {
      if (!exists) {
        // If no "recipes" table exists
        // create new, with "id", "ingredients", "instructions", "description", "category"
        // "rating", "favorite", "prepTime", "cookTime" and "source" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (recipe)
        return knex.schema.createTable('recipes', (table)  => {
          table.increments('id').primary()
          table.string('name')
          table.string('ingredients')
          table.string('instructions')
          table.string('description')
          table.string('category')
          table.integer('rating')
          table.integer('favorite')
          table.integer('prepTime')
          table.integer('cookTime')
          table.string('source')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Recipes\' created')
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
// Log all data in "books" table
knex.select('*').from('books')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

  // Just for debugging purposes:
// Log all data in "books" table
knex.select('*').from('recipes')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex