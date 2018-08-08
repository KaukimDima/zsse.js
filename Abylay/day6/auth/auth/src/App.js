import React, { Component } from 'react';
import './App.css';


class App extends Component {
 
 
  handleSubmit = (event) => {
    const {isLoggedin}= this.state;
    event.target.preventDefault();
  // const data = new FormData(event.target);
    console.log(event.target.username)
    fetch(`https://zsse.herokuapp.com/api/${event.target.username}`)
    .then(response => response.json())
    .then(json => console.log(json)) 


  }
  
  state = {
    isLoggedIn : false
  }
   
  handleResponse = () => {
    let response=this.state;
    let isLoggedIn=this.state;
    if (!response) {
      this.setState({isLoggedIn : true})
    }
    console.log(isLoggedIn)
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
   // const data = new FormData(event.target);
    fetch(`https://zsse.herokuapp.com/api/${event.target.username}`)
    .then(response => response.json())
    .then(json => console.log(json)) 
    return false;
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="username">Enter username</label>
      <input id="username" name="username" type="text" />

      <label htmlFor="email">Enter your email</label>
      <input id="email" name="email" type="email" />

      <label htmlFor="password">Enter your password</label>
      <input id="password" name="password" type="text" />

      <button>Send data!</button>
    </form>
    );
  }
}

export default App;
