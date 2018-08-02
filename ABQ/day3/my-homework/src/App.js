import React, { Component } from 'react';
import './App.css';
import Test2 from './Test2';
class App extends Component {

  state = {
    inputs : 1,
    reply:[],
    inputWords : [],
    todoso_id : [3, 4, 6]
  };


  componentDidMount() {
    this.state.todoso_id.forEach( (v) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/`+ v)
      .then(response => response.json())
      .then(json => this.state.reply.push(json))});
  }




  conLog = e => {
    //console.log(e.target.value)
    this.setState({
      inputWords : [... e.target.value]

    })
    //console.log("word input: ", this.state.inputWords)
    // this.setState({ todoso_id : [] e.target.value)
  }

  handleFetchClick = e => {
    const arrInput = document.getElementsByTagName('input')
    //console.log(arrInput)
    let arrInputs = [];
    for (var i = 0; i < arrInput.length; i++){
      arrInputs.push(+arrInput[i].value)
    }
    console.log(arrInputs)
    this.state.todoso_id = arrInputs
    console.log(this.state.todoso_id)


    this.state.todoso_id.forEach( (v) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/`+ v)
      .then(response => response.json())
      .then(json => this.setState({reply: [...this.state.reply, json]}))});

    // this.setState.state({ 

    // })
  }


  newInput = e => {
    
    e.target.preventDefault;
    let {inputs} = this.state;
    inputs += 1
    this.setState({ inputs: inputs });
    //console.log(this.state);
  }
  

  render() {
    let arr = [];
    for(let i=0; i < this.state.inputs; i++) {
     arr.push(<input className = "inputs" data-id={i} key={i} onChange={this.conLog} />);
    }
    return <div>
        <form action="">
          <button type="button" onClick={this.newInput}>
            add
          </button>
          {arr}
          <button type = "button" onClick = {this.handleFetchClick}>Fetch</button>
        </form>
        <Test2 reply = {this.state.reply}/>
      </div>;
  }
}

export default App;
