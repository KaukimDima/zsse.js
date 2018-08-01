import React, { Component } from 'react';
import './App.css';
import CommentList from './CommentList/CommentList';
import SendComment from './SendComment/SendComment';

let id = 0;

function getCommentId() {
	id += 1;
	return id;
}

class App extends Component {
	state = {
		send : {
			id : 0,
			comment : "",
			name : "",
		},
		commentList : [
			{
				id : 0,
				name : "some Name",
				comment : "some comment"
			},
			{
				id : 1,
				name : "some Name",
				comment : "some comment"
			}
		]
	}

	addComment(name, comment) {
		
	}

  render() {
		const { send, commentList } = this.state;
    return (
      <div className="App">
				<h1>Comments:)</h1>
        {send.map(el => 
					<SendComment 
						key = {el.id}
						name = {el.name}
						comment = {el.comment}
					/>
				)}
				{commentList.map(el =>
					<CommentList 
						key = {el.id}
						id = {el.id}
						name = {el.name}
						comment = {el.comment}
					/>
				)}
      </div>
    );
  }
}

export default App;
