import React, { Component } from "react";
import "./App.css";
import CommentList from "./CommentList/CommentList";
import SendComment from "./SendComment/SendComment";

let id = 1;

function getCommentId() {
  id += 1;
  return id;
}

class App extends Component {
  state = {
    author: "some Name",
    commentList: [
      {
        id: 0,
        name: "some Name",
        comment: "some comment"
      },
      {
        id: 1,
        name: "some Name",
        comment: "some comment"
      }
    ]
  };

  addComment = e => {
    const { commentList } = this.state;
    this.setState({
      author: e.send.name,
      commentList: [
        ...commentList,
        {
          id: getCommentId(),
          name: e.send.name,
          comment: e.send.comment
        }
      ]
    });
  };

  onDeleteComment = (id, name) => {
    const { author } = this.state;
    if (author !== name) return;
    this.setState(state => ({
      commentList: state.commentList.filter(comment => id !== comment.id)
    }));
  };

  render() {
    const { commentList } = this.state;
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-4">Add Comment</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <SendComment addComment={this.addComment} />
          <hr className="my-4" />
          <h1 className="display-4">Comments:)</h1>
          {commentList.map(el => (
            <CommentList
              key={el.id}
              id={el.id}
              name={el.name}
              comment={el.comment}
              onDelete={this.onDeleteComment}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
