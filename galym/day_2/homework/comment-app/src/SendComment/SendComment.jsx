import React, { Component } from 'react';
import './SendComment.css';

class SendComment extends Component {
	
	onChange = e => {
		const val = e.target.value;
	}

	handleSubmit = e => {
		e.preventDefault();

	}

  render() {
		const { name, comment } = this.props;
    return (
      <div className="SendComment">
        <form onSubmit={this.handleSubmit}>
					<p><input placeholder="Type your name" 
						onChange={this.onChange} /></p>
					<p><textarea name="comment" placeholder="Type text" 
						id="comment" cols="30" rows="10"></textarea></p>
					<p><input type="submit" value="send" /></p>
				</form>
      </div>
    );
  }
}

export default SendComment;