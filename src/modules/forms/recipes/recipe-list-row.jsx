// Import deps
import React from 'react'

// Create RecipeListRow component
export const RecipeListRow = (props) => (
  <tr className="table-row">
    <td className="table-item">
      {props.position}
    </td>

    <td className="table-item">
      {props.book.name}
    </td>

    <td className="table-item">
      {props.book.category}
    </td>

    <td className="table-item">
      {props.book.prepTime}
    </td>

    <td className="table-item">
      {props.book.rating}
    </td>

    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => props.handleRecipeRemove(props.recipe.id, props.recipe.name)}>
        Remove recipe
      </button>
    </td>
  </tr>
)