import React from 'react';
import './components/Todo.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const TodoData = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: localStorage.getItem("")? JSON.parse("todoList") : TodoData,
      value: ""
    }
  }

  handleClick = (itemId) => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: true
          }
        }
        return(item)
      })
    })
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.value,
          id: Date.now(),
          completed: false
        }
      ],
      value: ""
    })
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
  }

  clearCompleted = () => {
    localStorage.setItem("todoList", [])
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="content">
        <h1>My Todo List</h1>
        <TodoList
          list={this.state.todoList}
          clearCompleted={this.clearCompleted}
          handleClick={this.handleClick}
        />
        <TodoForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          clearCompleted={this.clearCompleted}
          list={this.state.todoList}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
