import React, { Component } from 'react';


class SendComment extends Component {
    state ={
        //name:"",
            name:" ",
            comment:""
     }
     handleName= e => {
         
         this.setState({name : e.target.value})
         
     };

     handleComment= e => {
        
        this.setState({comment : e.target.value})
        
    };

    handleForm = event => {
        event.preventDefault();
        const {addComment}=this.props;
        const {name,comment}=this.state;
        addComment(name,comment);
        console.log(this.state);
        
    };
    render() {
        return (
            <div className="SendComment" >
            <form onSubmit = {this.handleForm} action="" >
            <div className="form_group">
            <label htmlFor="exampleInputEmail1">Enter you name</label>
            <input onChange={this.handleName} type="text" className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Your name" />  
            </div>
            
            <div className="form_group">
            <label htmlFor="exampleInputEmail1">Enter your comment</label>
            <input onChange={this.handleComment} type="text" className="form-control" id="inputComment" aria-describedby="emailHelp" placeholder="Enter comment" />  
            </div>
           <button type="submit" className="btn btn-primary">Submit</button>
           </form>
           </div>
        );
    }
}
export default SendComment;