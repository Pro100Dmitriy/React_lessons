import React from 'react'
import TodoItem from './TodoItem'

const style = {
  ul:{
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

export default function todoList( props ){
  return (
    <ul style={style.ul}>
      { props.todos.map( (todo, index) => {
        return <TodoItem todo={todo} key={ todo.id } index={index} />
      }) }
    </ul>
  )
}