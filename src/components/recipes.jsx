// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Import components
import { RecipeList } from './recipe-list'

// Import styles
import './../styles/bookshelf.css'

// Create Bookshelf component
export const Recipes = () => {
  // Prepare states
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState('')
  const [favorite, setFavorite] = useState('')
  const [prepTime, setPrepTime] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [source, setSource] = useState('')
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all recipes on initial render
  useEffect(() => {
    fetchRecipes()
  }, [])

  // Fetch all recipes
  const fetchRecipes = async () => {
    // Send GET request to 'recipes/all' endpoint
    axios
      .get('http://localhost:4001/recipes/all')
      .then(response => {
        // Update the books state
        setRecipes(response.data)

        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the recipe list: ${error}`))
  }

  // Reset all input fields
  const handleInputsReset = () => {
    setName('')
    setIngredients('')
    setInstructions('')
    setDescription('')
    setCategory('')
    setRating('')
    setFavorite('')
    setPrepTime('')
    setCookTime('')
    setSource('')
  }

  // Create new recipe
  const handleRecipeCreate = () => {
    // Send POST request to 'recipe/create' endpoint
    axios
      .post('http://localhost:4001/recipe/create', {
        name: name,
        ingredients: ingredients,
        instructions: instructions,
        description: description,
        category: category,
        rating: rating,
        favorite: favorite,
        prepTime: prepTime,
        cookTime: cookTime,
        source: source
      })
      .then(res => {
        console.log(res.data)

        // Fetch all recipes to refresh
        // the recipes on the recipes list
        fetc()
      })
      .catch(error => console.error(`There was an error creating the ${title} book: ${error}`))
  }

  // Submit new recipe
  const handleRecipeSubmit = () => {
    // Check if all fields are filled
    if (name.length > 0 && ingredients.length > 0 && instructions.length > 0 && 
        description.length > 0 && category.length > 0 && rating.length > 0   &&
        favorite.length > 0 && prepTime > 0 && cookTime > 0 && source.length > 0) {
      // Create new recipe
      handleRecipeCreate()

      console.info(`Recipe ${name} added.`)

      // Reset all input fields
      handleInputsReset()
    }
  }

  // Remove book
  const handleRecipeRemove = (id, title) => {
    // Send PUT request to 'books/delete' endpoint
    axios
      .put('http://localhost:4001/recipe/delete', { id: id })
      .then(() => {
        console.log(`Recipe ${title} removed.`)

        // Fetch all recipes to refresh
        // the recipes on the recipes list
        fetchRecipes()
      })
      .catch(error => console.error(`There was an error removing the ${name} recipe: ${error}`))
  }

  // Reset recipe list (remove all recipes)
  const handleListReset = () => {
    // Send PUT request to 'books/reset' endpoint
    axios.put('http://localhost:4001/recipes/reset')
    .then(() => {
      // Fetch all recipes to refresh
      // the recipes on the recipes list
      fetchRecipes()
    })
    .catch(error => console.error(`There was an error resetting the recipe list: ${error}`))
  }

  return (
    <div className="recipe-list-wrapper">
      {/* Form for creating new recipe */}
      <div className="recipe-list-form">
        <div className="form-wrapper" onSubmit={handleRecipeSubmit}>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="name">Enter name:</label>
              <input className="form-input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="ingredients">Enter ingredients:</label>
              <input className="form-input" type="text" id="ingredients" name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.currentTarget.value)} />
            </fieldset>
          </div>

          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="instructions">Enter instructions:</label>
              <input className="form-input" type="text" id="instructions" name="instructions" value={instructions} onChange={(e) => setPubDate(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="description">Enter description:</label>
              <input className="form-input" type="text" id="description" name="description" value={description} onChange={(e) => setRating(e.currentTarget.value)} />
            </fieldset>
          </div>

          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="category">Enter category:</label>
              <input className="form-input" type="text" id="category" name="category" value={category} onChange={(e) => setPubDate(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="rating">Enter rating:</label>
              <input className="form-input" type="text" id="rating" name="rating" value={rating} onChange={(e) => setRating(e.currentTarget.value)} />
            </fieldset>
          </div>

          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="favorite">Enter favorite:</label>
              <input className="form-input" type="text" id="favorite" name="favorite" value={favorite} onChange={(e) => setPubDate(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="prepTime">Enter prep time:</label>
              <input className="form-input" type="text" id="prepTime" name="prepTime" value={prepTime} onChange={(e) => setRating(e.currentTarget.value)} />
            </fieldset>
          </div>

          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="cookTime">Enter cook time:</label>
              <input className="form-input" type="text" id="cookTime" name="cookTime" value={cookTime} onChange={(e) => setPubDate(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="source">Enter source:</label>
              <input className="form-input" type="text" id="source" name="source" value={source} onChange={(e) => setRating(e.currentTarget.value)} />
            </fieldset>
          </div>
        </div>

        <button onClick={handleRecipeSubmit} className="btn btn-add">Add the recipe</button>
      </div>

      {/* Render bookshelf list component */}
      <RecipeList recipes={recipes} loading={loading} handleRecipeRemove={handleRecipeRemove} />

      {/* Show reset button if list contains at least one book */}
      {recipes.length > 0 && (
        <button className="btn btn-reset" onClick={handleListReset}>Reset recipe list.</button>
      )}
    </div>
  )
}
