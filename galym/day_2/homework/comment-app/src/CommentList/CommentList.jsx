import React, { Component } from 'react';
import './CommentList.css';

class CommentList extends Component {
	
  render() {
		console.log(window.location.search);
    return (
      <div className="CommentList">
        <div id="write">

				</div>
      </div>
    );
  }
}

export default CommentList;
