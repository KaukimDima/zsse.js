import React, { Component } from 'react';

class SendComment extends Component {

    state = {

        send: {

            comment:"asdasd",
            name:""
         }
     }

HandleName = (e) => {

    const {send} = this.state;

    this.setState({send: {...send, name: e.target.value}});

    console.log(this.state);


}

HandleComment = (e) => {

    const {send} = this.state;

    this.setState({send: {...send, comment: e.target.value}});

    console.log(this.state);
}



HandleForm = (event) => {

        event.preventDefault();
        const {commentAdd} = this.props;
        const {name, comment} = this.state.send;
        commentAdd(name, comment);
        console.log(this.state);
    }
    render( ) {

        return (
                
        <div className = "send__message">

            <form onSubmit = {this.HandleForm}   action = "asd">

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">your name</label>
                <input className = "form-control" onChange = {this.HandleName} type="text" name="name" placeholder="Enter name" /> 

            
            </div>

            <label htmlFor="exampleInputEmail1">your comment</label>
            <input className="form-control" type = "text" onChange = {this.HandleComment} placeholder = "Enter comment" name = "comment" id =""/>
            <button type = "submit" className="btn btn-primary"> submit </button>
            </form>

        </div>


        );
    }

    
}
export default SendComment;