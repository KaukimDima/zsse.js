import React, { Component } from "react";

class CommentList extends Component {
  state = {};
  
  handleDelete = e => {
    const {id, name}= this.props;
    const {delComment} = this.props;
    delComment(id, name);
  }

  render() {
    const { name, comment } = this.props;
    return (
      <div className="border col-sm-5">
        <div className="panel panel-default">
          <div className="panel-heading">
            <strong>{name}</strong> <span className="text-muted" />
          </div>
          <div className="panel-body">{comment}</div>
        </div>
        <span onClick={this.handleDelete} className="delete-button">
          &#215;
        </span>
      </div>
    );
  }
}
 
export default CommentList;