import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './Routing/Routing';

class App extends Component {

	state = {
		users : []
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => this.setState({ users : json }));
		console.log(this.state);
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Routing />
      </div>
    );
  }
}

export default App;
