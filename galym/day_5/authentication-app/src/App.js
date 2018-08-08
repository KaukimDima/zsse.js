import React, { Component } from 'react';
import './App.css';
import Routing from './components/Routing/Routing';
class App extends Component {
	
	constructor( props ) {
		super();
	}
	
	render() {
		return (
      <div className="App">
				<Routing />
      </div>
    );
  }
}

export default App;