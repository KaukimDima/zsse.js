import React, { Component } from "react";

class SendComment extends Component {
    state = {
        comment : "asdasd",
        name : ""
    }


    handleName = e => {
        this.setState({  name: e.target.value });
    }

    handleComment = e => {
        this.setState({ comment : e.target.value  })
    }

    handleForm = ( event ) => {
        event.preventDefault();
        const { addComment } = this.props;
        const {name, comment} = this.state;
        addComment(name, comment);
        console.log(this.State);
    } 

    render() { 
        return <div className="send__message col-sm-10">
            <form onSubmit={this.handleForm} action="asdasd">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Your name</label>
                <input onChange={this.handleName} type="text" placeholder="Enter name" className="form-control" name="name" id="" />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Your comment</label>
                <input type="text" placeholder="Enter comment" className="form-control" name="comment" id="" />
              </div>

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>;
    }
}
 
export default SendComment;