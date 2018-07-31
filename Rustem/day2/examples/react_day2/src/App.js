import React, { Component } from 'react';
import './App.css';
import TodoDone from "./Todo/TodoDone";
import TodoList from "./Todo/TodoList";


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
        value: "Сходить за продуктами",
        done: false
      }
    ]
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ inputValue: value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { inputValue, todos } = this.state;
      const newTodo = { value: inputValue, done: false, id: getTodoId() };

      this.setState({ inputValue: "", todos: [...todos, newTodo] });
    }
  };

  cahngeDoneState = (id, val) => {

    this.setState()

  };

  handleClickCheckbox = id => {
    this.setState(state => ({
      todos: state.todos.map(
        todo => (id === todo.id ? { ...todo, done: !todo.done } : todo)
      )
    }));
  };

  handleDelete = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => id !== todo.id)
    }));
  };

  render() {
    const { inputValue, todos } = this.state;
    const todos_ = todos.filter(el => !el.done);
    const todo_done = todos.filter(el => el.done);
    return <div className="container">
        <div className="row">
          <div className="left col-sm-6">
            <div className="input-group col-sm-12">
              <input type="text" className="form-control" placeholder="Введите ваш план" value={inputValue} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
            </div>
            <div className="col-sm-10">
              {todos_.map(todo => (
                <TodoList
                  onChange={this.handleClickCheckbox}
                  onDelete={this.handleDelete}
                  key={todo.id}
                  id={todo.id}
                  text={todo.value}
                  done={todo.done}
                />
              ))}
            </div>
          </div>
          <div className="right col-sm-6">
            <div>
              {todo_done.map(todo => (
                <TodoDone
                  onChange={this.handleClickCheckbox}
                  key={todo.id}
                  id={todo.id}
                  text={todo.value}
                  done={todo.done}
                />
              ))}
            </div>
          </div>
        </div>
      </div>;
  }
}


export default App;
