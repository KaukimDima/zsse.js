import React, { Component } from 'react';
import './App.css';
import TodoShow from './test/Test1';
//import showlist from './test/Test2';
class App extends Component {

  state = {
    inputs : [1],
    todos_id:[1,5,9],
    result:[],
  };
  
  newInput = e => {
    //e.target.preventDefault;
    console.log(e);
    let {inputs} = this.state;
    inputs +=1;
    this.setState({ inputs: inputs});
  }

  submitter = e => {
    //e.target.preventDefault;
    let input;
    let arr=[];
    input= document.getElementsByTagName("input");
    for (let i=0;i < input.length; i++) {
    arr.push(+input[i].value);
    }
    console.log("arr", arr);
    let new_obj = [];
    arr.forEach( (v) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${v}`)
      .then(response => response.json())
      .then(json => new_obj.push(json))});
    this.setState({result: new_obj})
  }

  render() {

    
    let array=[];
    for(let i=0; i < this.state.inputs.length; i++) {
     array.push(<input data-id={i} key={i} onClick={this.conLog} />);
    }
    return  ( <div>
      <form  >
        <button  onClick={this.newInput} type="button">add</button>
        { array }
        <button type="button" onClick={this.submitter}> submit</button>
       
        </form>
         <TodoShow 
         result={this.state.result}/>
         </div>
    );
  }
}

export default App;
