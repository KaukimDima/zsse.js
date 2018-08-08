import React, { Component } from 'react';

class Home extends Component {

	constructor( props ) {
		super();
		console.log(props);
	}

	state = {
		recordBody: ''
	}

	handleKeyDown = e => {
		const { addRecord } = this.props;
		const { recordBody } = this.state;
		if (e.keyCode === 13) {
			addRecord(recordBody);
			this.setState({ recordBody: '' });
		}
	}

	handleChange = e => {
		this.setState({ recordBody: e.target.value });
	}
	
	render() {
		const { records } = this.props;
		return (
      <div className="Home">
				<h1>HOME</h1>

				<input
					value={ this.state.recordBody }
					onKeyDown={ this.handleKeyDown }
					onChange={ this.handleChange }
				/>
      </div>
    );
  }
}

export default Home;
