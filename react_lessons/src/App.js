import React from 'react'
import TodoList from './todo/todoList'



function App(){

  const todos = [
    {id: 1, compleated: false, title: 'By bread'},
    {id: 2, compleated: false, title: 'By bread2'},
    {id: 3, compleated: false, title: 'By bread3'}
  ]

  return (
    <div className="wraper">
      <h1>Hello React!</h1>
      
      <TodoList todos={todos} />
    </div>
  )
}

export default App