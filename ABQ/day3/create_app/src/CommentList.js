import React, { Component } from 'react';

class CommentList extends Component {

    
deleteComment = e => {
    const {deleteComment} = this.props;
    const {name, id} = this.props;
    
    deleteComment(id, name);
}
    render( ) {
       
        const { name, comment , id } = this.props;
        return (
        
        
            <div className="comment_list">
            <div className="message">
                <div>name: {name}</div>
                <div>message: {comment}</div>
                <span onClick = {this.deleteComment}> "X"</span>
            </div>
                </div>


        );
    }

    
}
export default CommentList;