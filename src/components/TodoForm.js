import React from 'react'

export default function TodoForm() {

  return (
    <div>
      <form onSubmit={this.state.onSubmit}>
        <input
          type="text"
          name="todo"
          onChange={this.state.onChange}
          value={this.state.todoValue}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}