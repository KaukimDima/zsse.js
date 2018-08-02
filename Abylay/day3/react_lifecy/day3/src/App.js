import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    inputs : [1]
  }

  getIndex = ( el ) => {
      const children = el.parentNode.childNodes;
      let i = 0;
      for (; i < children.length; i++) {
        if (children[i] == el) {
          return i;
        }
      }
    return -1;
  }

  conLog = e => {
    console.log(this.getIndex(e.target));
  }

  newInput = e => {
    console.log(e);
    let {inputs} = this.state;
    inputs.push(1);
    console.log(inputs);
    this.setState({ inputs: inputs });
  }

  

  render() {
    let arr = [];
    for(let i=0; i < this.state.inputs.length; i++) {
      arr.push(<input key={i} onClick={this.conLog} />);
    }
    return <div>
      <form action="">
        
        <button onClick={this.newInput}>add</button>
        <button>submit</button>
      </form>
        { arr }
      </div>;
  }
}

export default App;
