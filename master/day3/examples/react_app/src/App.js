import React, { Component } from 'react';
import './App.css';
import CommentList from "./comments/CommentList";
import SendComment from "./comments/SendComment";
import UserList from "./users/UserList";

let id = 0;

function getTodoId() {
  id += 1;
  return id;
}
class App extends Component {
  state = {
    name : "",
    commentList : [
    ]
  }

  delComment = (id, name) => {
    const {commentList} = this.state;
    if(name !== this.state.name) return;
    const newCommentlist = commentList.filter( el => id !== el.id);
    this.setState({
      commentList : [...newCommentlist]
    });
  }

  addComment = (name1, comment) =>  {
    const id =getTodoId();
    const  {commentList} = this.state;
    this.setState({ name : name1, commentList: [...commentList,  {
      id : id,
      name : name1,
      comment : comment
    }] });
  }

  render() {
    const { commentList } = this.state;
    return <div>
        <div className="send__comment">
          <SendComment addComment={this.addComment} />
        </div>
        <div className="commentlist col-sm-12">
          {commentList.map(el => (
            <CommentList
              key={el.id}
              name={el.name}
              comment={el.comment}
              id={el.id}
              delComment={this.delComment}
            />
          ))}
        </div>
        <UserList>
            asdasdasdasdasd
        </UserList>
      </div>;
  }
}

export default App;
