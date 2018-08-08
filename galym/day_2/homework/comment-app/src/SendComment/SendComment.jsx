import React, { Component } from "react";
import "./SendComment.css";

class SendComment extends Component {
  state = {
    send: {
      comment: "",
      name: ""
    }
  };

  handleEventName = e => {
    const { send } = this.state;
    this.setState({ send: { ...send, name: e.target.value } });
  };

  handleEventComment = e => {
    const { send } = this.state;
    this.setState({ send: { ...send, comment: e.target.value } });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addComment } = this.props;
    addComment(this.state);
  };

  render() {
    return (
      <div className="SendComment">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              placeholder="Type your name..."
              onChange={this.handleEventName}
              className="form-control"
              id="exampleFormControlInput1"
            />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Type your comment..."
              onChange={this.handleEventComment}
            />
          </div>

          <input type="submit" value="Send" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default SendComment;
