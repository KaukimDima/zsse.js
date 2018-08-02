import React, { Component } from 'react';
import './App.css';
//import collectid from './test/Test1';
//import showlist from './test/Test2';
class App extends Component {

  state = {
    inputs : [1],
    reply:[]
  };
  componentDidMount() {
    //const{reply}=this.state;
    //const self = this;
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(json => {
        this.setState({ reply: json }),
        console.log(this.state.reply)
      });
  }
  
  getIndex = ( el ) => {
      const children = el.parentNode.childNodes;
      let i = 0;
      for (; i < children.length; i++) {
        if (children[i] === el) {
          return i;
        }
      }
    return -1;
  }

  conLog = e => {
    console.log(this.getIndex(e.target));
  }

  newInput = e => {
    //e.preventDefault;
    console.log(e);
    let {inputs} = this.state;
    inputs.push(1);
    this.setState({ inputs: inputs });
  }

  

  render() {
    let arr = [];
    for(let i=0; i < this.state.inputs.length; i++) {
     arr.push(<input key={i} onClick={this.conLog} />);
    }
    return ( <div>
      
       
        <button onClick={this.newInput}>add</button>
        <button>submit</button>
        
      { arr }
      </div>
    )
  }
}

export default App;
