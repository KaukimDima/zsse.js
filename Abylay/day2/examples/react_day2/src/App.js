import React, { Component } from 'react';
import './App.css';
import TodoList from './ToDo/Todolist';

let id = 0; 

function getTodoId() {
  id += 1;
  return id;
}


class App extends Component {
  state = {
    inputValue: "",
    todos: [
      {
        id: 0,
        value: "Встать с утра",
        done: true
      }
    ]
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { inputValue, todos } = this.state;
      const newTodo = { value: inputValue, done: false, id: getTodoId() };

      this.setState({ inputValue: "", todos: [...todos, newTodo] });
    }
  };

  handleEvent = e => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  }

  onDeleteApp = eid => {
    const{todos}=this.state;
   const newArray=todos.filter( e =>
     e.id !=eid
   )
   this.setState({todos: [ ...newArray]});
   
   }
  

  render() {
    console.log(this.state);
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>ToDo</h1>
        <input
          type="text"
          onChange={this.handleEvent}
          onKeyDown={this.handleKeyDown}
        />
        <div>
          
          {todos.map(todo => (
            <TodoList
              onDeleteApp={this.onDeleteApp}
              key={todo.id}
              id={todo.id}
              text={todo.value}
              done={todo.done}
            />
          ))}
        </div>
        </div>
    );
  }
}

export default App;