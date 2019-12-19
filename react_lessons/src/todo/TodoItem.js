import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({ todo, index, onChange }){

  const list = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    },
    input: {
      marginRight: '1rem'
    }
  }

  return (
    <li style={ list.li }>
      <span>
        <input style={ list.input } type="checkbox" onChange={ () => onChange(todo.id) } />
        <strong>{ index + 1 }</strong>
        &nbsp;
      { todo.title }
      </span>
      <button className="rm">&times;</button>
    </li>
  )

}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem