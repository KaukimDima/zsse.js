import React, { Component } from 'react';
import './App.css';



class App extends Component {
	
	state = {
		commentBody: ''
	};

	handleKeyDown = e => {
		const { addComment } = this.props;
		const { commentBody } = this.state;
		if (e.keyCode === 13) {
			addComment(commentBody);
			this.setState({ commentBody: '' });
		}
	}

	handleChange = e => {
	this.setState({ commentBody: e.target.value });
	}

  render() {
		const { comments } = this.props;
    return (
      <div className="App">
				<input
					value={ this.state.commentBody }
					onKeyDown={ this.handleKeyDown }
					onChange={ this.handleChange }
				/>
				{<div>
					{ comments.map( (el, i) => <div key={i}><b>{el}</b></div>) }
				</div>}
      </div>
    );
  }
}

export default App;
