import React, { Component } from 'react';
import './App.css';
import Routing from './components/Routing/Routing'; 
class App extends Component {
	
	constructor( props ) {
		super();
		console.log(props)
	}
	
	// state = {
	// 	recordBody: ''
	// }

	// handleKeyDown = e => {
	// 	const { addRecord } = this.props;
	// 	const { recordBody } = this.state;
	// 	if (e.keyCode === 13) {
	// 		addRecord(recordBody);
	// 		console.log(this.props)
	// 		/* this.setState({ recordBody: '' }); */
	// 	}
	// }

	// handleChange = e => {
	// 	this.setState({ recordBody: e.target.value });
	// }
	
	render() {
		const { records } = this.props;
		return (
      <div className="App">
		  <Routing />
      </div>
    );
  }
}

export default App;
