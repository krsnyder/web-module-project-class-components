import React from 'react'

export default function TodoForm(props) {

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="todo"
          value={props.value}
          onChange={props.onChange}
        />
        <button type="submit">Add Todo</button>
        <button
          type="button"
          onClick={props.clearCompleted}
        >Clear Completed</button>
      </form>
    </div>
  )
}