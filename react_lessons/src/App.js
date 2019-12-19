import React from 'react'
import TodoList from './todo/todoList'



function App(){

  let todos = [
    {id: 1, compleated: false, title: 'By bread'},
    {id: 2, compleated: false, title: 'By bread2'},
    {id: 3, compleated: false, title: 'By bread3'}
  ]

  function toggleTodo(id){
    todos = todos.map( todo => {
      if(todo.id === id){
        todo.compleated = true
      }
      return todo
    })
  }

  return (
    <div className="wraper">
      <h1>Hello React!</h1>
      
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  )
}

export default App