import React from 'react'

export default function Todo(props) {
  const toggle = () => {
    props.handleClick(props.item.id)
  }

  return (
    <div
      onClick={toggle}
      className={`${props.item.completed ? 'completed' : 'list-item'}`}>
      <p>{props.item.task}</p>
    </div>
  )
}
