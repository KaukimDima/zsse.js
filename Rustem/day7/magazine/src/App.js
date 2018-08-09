import React, { Component } from 'react';
import './App.css';
import Client from './components/client/index'
/* import Routing from './components/Routing/Routing'; */
class App extends Component {

  state = {

    show: true

  }
	
	constructor( props ) {
		super();
		console.log(props)
	}
	
	render() {
		return (
  
      <div className="App">


      <button> Client </button>

      <button> Customer </button>


	     <Client/>

      </div>
    );
  }
}


export default App;
