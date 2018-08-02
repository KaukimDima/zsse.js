import React, { Component } from "react";
import "./App.css";
import FetchTodoList from "./FetchTodoList/FetchTodoList";

class App extends Component {
  state = {
    inputs: 1,
    value: []
  };


  handleFetchEvent = e => {
    const input = document.getElementsByTagName("input");
    let arr = [];
    for (let i = 0; i < input.length; i++) {
      arr.push(+input[i].value);
    }
    this.setState({ value: "jghffdg" });
    console.log(this.state);
  };

  handleFetchEvent1 = e => {
    this.setState({ value: "asdasd" });
    console.log(this.state);
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
    return (
      <div className="App">
        <form className="form-group" id="form">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleFetchEvent1}
          >
            Fetch
          </button>
          <button
            type="button"
            id="button"
            className="btn btn-success"
            onClick={this.handleAddEvent}
          >
            Add
          </button>
        </form>

        <hr />
        {arr}
        <hr />

        <FetchTodoList value="this.state.value" />
      </div>
    );
  }
}


export default App;
