import React, { Component } from 'react';
import './App.css';

const handleSubmit = (event) => {
  const {isLoggedin}= this.state;
  event.target.preventDefault();
 // const data = new FormData(event.target);
  console.log(event.target.username)
  fetch(`https://zsse.herokuapp.com/api/${event.target.username}`)
  .then(response => response.json())
  .then(json => console.log(json)) 
  if (! response.json) {
    this.setState(isLogged : true)
  }
}

class App extends Component {
  state = {
    isLoggedIn : false
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
