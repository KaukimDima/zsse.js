import React, { Component } from 'react';
import CommentList from './CommentList';

class SendComment extends Component {

    state = { 

        name : "BAtman",
        comment : " commmentnnrneafmsdf ",
    };

    handleClick = e => {
        e.preventDefault();
        const { addComment } = this.props;
        const {name, comment} = this.state;
        console.log("name: " + name + " comment: " + comment);
        addComment(name, comment)
        
    }

    handleChangeName = e => {

        this.setState({name : e.target.value})
    }
    handleChangeComment = e => {
        this.setState({ comment : e.target.value })
    }


    render( ) {

        

        return (
        
        
        <div className = "send__message form-group">


            
            <form action = "">

            <input className = "form-control" type = "text" name = "name" id ="" onChange = {this.handleChangeName}/>
            <input className = "form-control" type = "text" name = "comment" id ="" onChange = {this.handleChangeComment}/>

            <button className="btn btn-primary" type = "submit" onClick = {this.handleClick}> submit </button>
            </form>

            {/* <div>
            <CommentList
            key = {this.state.name}
            name = {this.state.name}
            comment = {this.state.comment} 
            post = {this.state.send}
            />

            </div> */}
          </div>


        );
    }

    
}
export default SendComment;

