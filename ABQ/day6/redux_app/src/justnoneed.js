import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import createStore from "./store";


const store = createStore();

store.dispatch({
  'type' : "ADD_COMMMENT",
  'payload' : "some comment",
});

store.dispatch({
  'type' : "ADD_USER",
  'payload' : "new user",
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
