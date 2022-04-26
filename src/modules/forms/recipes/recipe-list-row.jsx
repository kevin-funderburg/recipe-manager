// Import deps
import React from 'react'

// Create RecipeListRow component
export const RecipeListRow = (props) => (
  <tr className="table-row">
    <td className="table-item">
      {props.position}
    </td>

    <td className="table-item">
      {props.recipe.name}
    </td>

    <td className="table-item">
      {props.recipe.category}
    </td>

    <td className="table-item">
      {props.recipe.prep_time}
    </td>

    <td className="table-item">
      {props.recipe.rating}
    </td>

    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => props.handleRecipeRemove(props.recipe.id, props.recipe.name)}>
        {/* onClick={() => props.handleRecipeRemove(props.key, props.recipe.name)}> */}
        Remove recipe
      </button>
    </td>
  </tr>
)