import React from 'react';
import TodoData from './TodoData'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: TodoData
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

  onSubmit = (value) => {
    this.setState({
      todoList: [...this.state.todoList, value]
    })
  }

  onComplete = (itemId) => {
    // Check if item contains class, if so remove from state
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === itemId) {
          return{
            ...item,
            completed: true
          }
        }
        return(item)
      })
    })
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <TodoList list={this.state.todoList} handleClick={this.handleClick}/>
        <TodoForm
          onSubmit={this.onSubmit}
          onComplete={this.onComplete}
          list={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
