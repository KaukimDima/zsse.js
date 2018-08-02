import React, { Component } from 'react';
<<<<<<< HEAD
//import logo from './logo.svg';
=======
>>>>>>> cbea1358c6d6fc23c7b9870bd00e2ee2144f499e
import './App.css';
import TodoDone from "./Todo/TodoDone";
import TodoList from "./Todo/TodoList";


let id = 0;

function getTodoId() {
  id += 1;
  return id;
}

let id = 0; 

function getTodoId() {
  id += 1;
  return id;
}


class App extends Component {
  
  state = {
<<<<<<< HEAD
    //test: "defualt",
=======
>>>>>>> cbea1358c6d6fc23c7b9870bd00e2ee2144f499e
    inputValue: "",
    todos: [
      {
        id: 0,
<<<<<<< HEAD
        value: "Встать с утра",
        done: true
=======
        value: "Сходить за продуктами",
        done: false
>>>>>>> cbea1358c6d6fc23c7b9870bd00e2ee2144f499e
      }
    ]
  };

<<<<<<< HEAD
=======
  handleChange = event => {
    const value = event.target.value;
    this.setState({ inputValue: value });
  };

>>>>>>> cbea1358c6d6fc23c7b9870bd00e2ee2144f499e
  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { inputValue, todos } = this.state;
      const newTodo = { value: inputValue, done: false, id: getTodoId() };

      this.setState({ inputValue: "", todos: [...todos, newTodo] });
    }
  };

<<<<<<< HEAD
  handleEvent = e => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  }
  changeTest = (id) => {
    const {todos} = this.state;
    const item = todos.filter(e => e.id !== id);
    this.setState({ todos: [...item] });
  }

  render() {
    //console.log(this.state);
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>ToDo</h1>
        <input
          type="text"
          onChange={this.handleEvent}
          onKeyDown={this.handleKeyDown}
        />
        <div>{todos.map(el => <TodoList
           key = {el.id} 
           deletefunc={this.changeTest} 
           id={el.id}
           value= {el.value}
           done = {el.done}/>)}
        </div> 
      </div>
    );
  }
}

class TodoList extends Component {
Ondeletetodoitem = e => {
  const {deletefunc} = this.props;
  deletefunc(this.props.id);
  
}

checkbox = (e) => {
  console.log(e.target.value);
}

  render() {
    const {id,value,done} = this.props;
    //console.log(this.state);
    return (
      <div>
       <h1 key={id}> 
       <input type="checkbox" checked = {done} onClick = {this.checkbox}/>
       <span className="todoText" > {value} </span>
       <span className="cross" onClick = {this.Ondeletetodoitem}> &#215; </span>
       <span className="DoneText"> {done} </span>

       </h1>
      </div>
    );
  }
}
=======
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


>>>>>>> cbea1358c6d6fc23c7b9870bd00e2ee2144f499e
export default App;

