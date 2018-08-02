<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
import Todo from './todo/todo';

class App extends Component {
=======
import React, { Component } from "react";
import "./App.css";
import FetchTodoList from "./FetchTodoList/FetchTodoList";
>>>>>>> ee8a3e5294c87827a663bea2a25c2840d415c402

class App extends Component {
  state = {
<<<<<<< HEAD
    inputs : 1,
    reply:[],
    toDoid: [ 1, 3, 5,23,22,34],
    result: []
  };


  componentDidMount() {
   this.state.toDoid.forEach((v) => {

   fetch(`https://jsonplaceholder.typicode.com/todos/${v}`)

   .then(response => response.json())
   .then(json => this.setState({  result:[...this.state.result, json]}));

   });

  }

  newInput = e => {
    let {inputs} = this.state;
    inputs += 1
=======
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
>>>>>>> ee8a3e5294c87827a663bea2a25c2840d415c402
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
<<<<<<< HEAD
    console.log('state', this.state)
    return <div>
        <form action="">
          <button type="button" onClick={this.newInput}>
            add
=======

    console.log('render', this.state);

    return <div className="App">
        <form className="form-group" id="form">
          <button type="button" className="btn btn-primary" onClick={this.handleFetchEvent}>
            Fetch
          </button>
          <button type="button" id="button" className="btn btn-success" onClick={this.handleAddEvent}>
            Add
>>>>>>> ee8a3e5294c87827a663bea2a25c2840d415c402
          </button>
        </form>

<<<<<<< HEAD
        
        < Todo result = {this.state.result}/>
      </div>
=======
        <hr />
        {arr}
        <hr />

        <FetchTodoList value="this.state.value" />
      </div>;
>>>>>>> ee8a3e5294c87827a663bea2a25c2840d415c402
  }
}

export default App;
