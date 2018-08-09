import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

import Home from './components/Home'
/* import Routing from './components/Routing/Routing'; */
class App extends Component {
	
	constructor( props ) {
		super();
		console.log(props)
	}
	
	render() {
		return (
      <div className="App">


	  <Home/>

      </div>
    );
  }
}


export default App;
