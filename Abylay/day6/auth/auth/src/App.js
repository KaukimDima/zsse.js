import React, { Component } from 'react';
import './App.css';
import Blog from './components/Blog'; 

class App extends Component {
 
  state = {
    isLoggedIn : false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let form=event.target;
    fetch(`https://zsse.herokuapp.com/api/user/${form.elements.username.value}`)
    .then(response => response.json())
    .then(json => this.handleResponse(json) 
     ) 
    
   
  }
  handleResponse = (response) => {
    console.log(Object.values(response))
    let newarr=Object.values(response);
    let isLoggedIn=this.state;
    if (!newarr[0]) {
      this.setState({ isLoggedIn : true })
    }
    console.log(isLoggedIn)
  }

  
  render() {
    const isLoggedIn=this.state;
    return ( 
      <div>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="username">Enter username</label>
      <input  name="username" type="text" />

      <label htmlFor="email">Enter your email</label>
      <input name="email" type="email" />

      <label htmlFor="password">Enter your password</label>
      <input  name="password" type="text" />

      <button >Send data!</button>
    </form>
    <Blog isLoggedIn={ isLoggedIn } />
    </div>
    );
  }
}

export default App;
