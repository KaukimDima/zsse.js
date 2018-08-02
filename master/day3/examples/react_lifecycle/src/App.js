import React, { Component } from "react";
import "./App.css";
import FetchTodoList from "./FetchTodoList/FetchTodoList";

class App extends Component {
  state = {
    inputs: 1,
    value: [],
    result: []
  };

  handleAddEvent = e => {
    let { inputs } = this.state;
    inputs += 1;
    this.setState({ inputs: inputs });
  };

  // handleFetchEvent = e => {
  //   const input = document.getElementsByTagName("input");
  //   let arr = [];
  //   for (let i = 0; i < input.length; i++) {
  //     arr.push(+input[i].value);
  //   }
  //   this.setState({ value: "jghffdg" });
  //   console.log(this.state);
  // };

  handleFetchEvent = e => {
    const input = document.getElementsByTagName("input");
    let arr = [];
    for (let i = 0; i < input.length; i++) {
      arr.push(+input[i].value);
    }

    let arr_obj = [];

    arr.forEach(v => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${v}`)
        .then(data => data.json())
        .then(json => arr_obj.push(json) );
        // this.setState({ result: [...this.state.result, json] })
    });

    this.setState({ result: arr_obj });

  };


  newInput = e => {
    e.target.preventDefault;
    let { inputs } = this.state;
    inputs += 1;
    this.setState({ inputs: inputs });
  };

  render() {
    let arr = [];
    for (let i = 0; i < this.state.inputs; i++) {
      arr.push(
        <input
          key={i}
          className="form-control"
          placeholder="Type number..."
          onClick={this.conLog}
        />
      );
    }

    console.log('render', this.state);

    return <div className="App">
        <form className="form-group" id="form">
          <button type="button" className="btn btn-primary" onClick={this.handleFetchEvent}>
            Fetch
          </button>
          <button type="button" id="button" className="btn btn-success" onClick={this.handleAddEvent}>
            Add
          </button>
        </form>

        <hr />
        {arr}
        <hr />

        <FetchTodoList value="this.state.value" />
      </div>;
  }
}

export default App;
