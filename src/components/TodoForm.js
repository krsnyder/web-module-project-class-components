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
      </form>
    </div>
  )
}