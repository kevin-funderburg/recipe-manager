// Import deps
import React from 'react'

// Import components
import { RecipeListRow } from './recipe-list-row'

// Import styles
import './../styles/bookshelf-list.css'

// Create BookshelfList component
export const RecipeList = (props) => {
  // Show loading message
  if (props.loading) return <p>Recipe table is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" />

            <th className="table-head-item">Name</th>

            <th className="table-head-item">Category</th>

            <th className="table-head-item">Prep Time</th>

            <th className="table-head-item">Rating</th>

            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
          {props.recipes.length > 0 ? (
            props.recipes.map((recipe, idx) => (
              <RecipeListRow
                key={recipe.id}
                recipe={recipe}
                position={idx + 1}
                handleRecipeRemove={props.handleRecipeRemove}
              />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no books to show. Create one!</td>
            </tr>
          )
        }
        </tbody>
    </table>
  )
}
