import React from 'react';
import './components/Todo.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const TodoData = [
  {
    task: "Module 1 Project",
    id: "001",
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: TodoData,
      value: "todo"
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
      todoList: [...this.state.todoList, this.state.value]
    })
  }

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(item =>
        item.completed === false
      )
    })
  }

  render() {
    return (
      <div className="content">
        <h1>My Todo List</h1>
        <TodoList list={this.state.todoList} handleClick={this.handleClick}/>
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
