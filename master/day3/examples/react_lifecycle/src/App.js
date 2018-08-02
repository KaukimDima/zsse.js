import React, { Component } from 'react';
import './App.css';
import TodoShow from "./ToDo/TodoShow";
class App extends Component {
  state = {
    inputs: 1,
    todoso_id: [1, 5, 9],
    result : []
  };

  componentDidMount() {
    this.state.todoso_id.forEach( (v, i, arr) =>  {
      fetch(`https://jsonplaceholder.typicode.com/todos/${v}`).
        then( data => data.json() ).
        then( json => this.setState({
          result : [...this.state.result, json]
        }));
    });
  }

  newInput = e => {
    e.target.preventDefault;
    let { inputs } = this.state;
    inputs += 1;
    this.setState({ inputs: inputs });
  };

  render() {
    let arr = [];
    for (let i = 0; i < this.state.inputs; i++) {
      arr.push(<input data-id={i} key={i} onClick={this.conLog} />);
    }
    console.log(this.state);
    return (
      <div>
        <form onSubmit action="">
          <button type="button" onClick={this.newInput}>
            add
          </button>
          {arr}
          <button type="submit">submit</button>
        </form>
        <TodoShow result={this.state.result} />
      </div>
    );
  }
}

export default App;
