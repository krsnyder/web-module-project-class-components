import React from 'react'

export default function TodoForm(props) {

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="todo"
          onChange={props.onChange}
          value={props.todoValue}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}