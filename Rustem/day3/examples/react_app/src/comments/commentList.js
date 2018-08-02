import React, { Component } from 'react';

class CommentList extends Component {

    state = {}

    deleteToDoOsyjerde = e => {

        const {deleteToDo} = this.props;

        const { name, id } = this.state;

        deleteToDo(name,id);

    }

    render( ) {

    const {name, comment} = this.props;

        return (
                
        <div className = "commentlist">

        <h1> {name} </h1>
        <h2> {comment}</h2>
        <span onClick={this.deleteToDoOsyjerde} className="cross">&#215;</span>


        </div>


        );
    }

    
}
export default CommentList;