import React, { Component } from 'react';
import './App.css';
import Test2 from './test/Test2';
class App extends Component {

  state = {
    inputs : 1,
    reply:[]
  };

  newInput = e => {
    e.target.preventDefault;
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
    return <div>
        <form action="">
          <button type="button" onClick={this.newInput}>
            add
          </button>
          {arr}
          <button>submit</button>
        </form>
        <Test2 />
      </div>;
  }
}

export default App;
