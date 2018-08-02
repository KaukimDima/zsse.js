import React, { Component } from 'react';
import './App.css';
import Todo from './todo/todo';

class App extends Component {

  state = {
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
    this.setState({ inputs: inputs });
    console.log(this.state);
  }
  

  render() {
    let arr = [];
    for(let i=0; i < this.state.inputs; i++) {
     arr.push(<input data-id={i} key={i} onClick={this.conLog} />);
    }
    console.log('state', this.state)
    return <div>
        <form action="">
          <button type="button" onClick={this.newInput}>
            add
          </button>
          {arr}
          <button>submit</button>
        </form>

        
        < Todo result = {this.state.result}/>
      </div>
  }
}

export default App;
