import React from 'react'
import Todo from './Todo'

export default function TodoList() {

  return (
    <div>
      <Todo todoItem={ this.state.todoValue}/>
    </div>
  )
}