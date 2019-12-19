import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({ todo, index }){

  const list = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    }
  }

  return (
    <li style={ list.li }>
      <span>
        <input type="checkbox" />
        <strong>{ index + 1 }</strong>
      { todo.title }
      </span>
      <button>&times;</button>
    </li>
  )

}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem