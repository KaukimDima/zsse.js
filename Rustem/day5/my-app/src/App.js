import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link, Redirect } from "react-router-dom";

import UserList from "./u/UserList";
import Login from "./u/login";
import axios from 'axios';

class App extends Component {

state = {

  isLog:true,

  name: "name",

  password: "password",

  form: {


  }

};

handleInput = (e) => {


  const name = e.target.name;

  let {form} = this.state;

  form[name] = e.target.value;

  this.setState({form:{...form} })

}

handleSubmit = (event) => {

  const {isLog} = this.state;

  event.target.preventDefault();

  alert(132231);

  this.setState({ isLog: false });

  this.setState({ isLog: false });

  console.log(isLog);
}

  render() {

    const{isLog} = this.state;

    if(isLog) {

    return (
      <div>
          <form onSubmit={this.handleSubmit}>
         <label>
           Name:
          <input  type = "text" onChange = {this.handleInput} placeholder = " Name " name ="name"/> 
          </label>

          <br/>

          <label>
           pass:
          <input type = "password" onChange = {this.handleInput} placeholder = "password" name = "password" value = "true"/>

          </label>


          <button onClick={this.handleSubmit}>
            submit
          </button>

          <div> {this.state.isLog} </div>

        
         </form>
   
   <h1> Content </h1>

      <UserList/>

      </div>
    );

  }
  else {

    return (

      <div> 

        <Routing/>

      </div>

    )
  }
  }
}

const Routing = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>

      <hr />

      <Route path="/login" component={Login} />
      
    </div>
  </Router>
);


export default App;

