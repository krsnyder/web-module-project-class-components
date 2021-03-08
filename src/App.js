import React from 'react';
import {TodoData, formValue} from './TodoData'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: TodoData,
      formValue: 
    }
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <TodoList list={this.state.todoList} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
