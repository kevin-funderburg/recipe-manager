// Import deps
import React from 'react'

// Create RecipeListRow component
export const BookshelfListRow = (props) => (
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
        onClick={() => props.handleBookRemove(props.book.id, props.book.title)}>
        Remove book
      </button>
    </td>
  </tr>
)