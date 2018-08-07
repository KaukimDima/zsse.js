import React, { Component } from 'react';
import './App.css';
import { getComments } from './reducers';

const handleKeyDown = e => {
	const { addComment } = this.props;
	const { commentBody } = this.state;
	if (e.keyCode === 13) {
		addComment(commentBody);
		this.setState({ commentBody: '' });
	}
}

const handleChange = e => {
	this.setState({ commentBody: e.target.value });
}

class App extends Component {
	
	state = {
		commentBody: ''
	};

  render() {
		const { comments } = this.props;
    return (
      <div className="App">
				<input
					value={ this.state.commentBody }
					onKeyDown={ handleKeyDown }
					onChange={ handleChange }
				/>
				{<div>
					{ comments.map( (el, i) => <div key={i}><b>{el}</b></div>) }
				</div>}
      </div>
    );
  }
}

export default App;
