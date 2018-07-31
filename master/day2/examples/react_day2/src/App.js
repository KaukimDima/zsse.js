import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

let id = 0; 

function getTodoId() {
  id += 1;
  return id;
}


class App extends Component {
  state = {
    //test: "defualt",
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
export default App;

