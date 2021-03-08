import React from 'react';
import {TodoData, formValue} from './TodoData'
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
          return(toDolist)
        }
        return(item)
      })
    })
  }

  onSubmit = (value) => {
    this.setState({
      todoList: [...todoList, value]
    })
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <TodoList list={this.state.todoList} handleClick={this.handleClick}/>
        <TodoForm onSubmit={ onSubmit }/>
      </div>
    );
  }
}

export default App;
