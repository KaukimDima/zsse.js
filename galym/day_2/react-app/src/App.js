import React, { Component } from 'react';
import './App.css';
import TodoList from './Todo/TodoList';

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
	
	onDeleteItem = id => {
		this.setState(state => ({ 
			todos: state.todos.filter( todo => id !== todo.id)
		 }))
  }

  render() {
		const { todos, inputValue } = this.state;
    return (
      <div className="App">
				<div class="container">
					<div className="row">
						<div className="col-6">
						<h1>ToDo</h1>
							<input
								type="text"
								value={inputValue}
								onChange={ this.handleEvent }
								onKeyDown={ this.handleKeyDown }
							/>
							{ 
								todos.map(el => 
								<TodoList
									key = {el.id}
									id = {el.id}
									value = {el.value}
									done = {el.done}
									onDelete = {this.onDeleteItem}
								/>) 
							}
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default App;
