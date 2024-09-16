import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {

  return (
    <div className="todo-container">
      {props.list.map(item => {
        return (
          <Todo
            item={item}
            key={item.id}
            handleClick={props.handleClick}
            clearCompleted={props.clearCompleted}
          />
        )
      }
    )}
    </div>
  )
}