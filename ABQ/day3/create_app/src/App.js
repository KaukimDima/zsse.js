import React, { Component } from 'react';
import './App.css';
import CommentList from "./CommentList";
import SendComment from "./SendComment";
import Users from "./Users";

let id = 0

function getId(){
        id = id + 1;
        return id;

     }

class App extends Component{
    
     


    
    state = {
        commentList : [
        
        ]
    }
    
    addComment = (name, comment) => {
        const { commentList } = this.state;

        this.setState({ commentList : [ ... commentList, { name : name, comment : comment, id : getId()}]})
        console.log(commentList)
    }


    deleteComment = (id, name) => {
    
        const { commentList } = this.state;
        if(name == commentList.name) return;
        this.setState({
            
            commentList : [ ...commentList.filter(el => el.id !== id)]

        })

    
    
    }


    render()
    {

        


        return(
              
              <div>
                <div className="send_comment">
                <SendComment addComment = {this.addComment}/>
                </div>
           

            
                <div className="comment_list">
                {this.state.commentList.map(element => <CommentList 
                key={element.id}
                id = {element.id}
                name = {element.name}
                comment = {element.comment}
                deleteComment = {this.deleteComment}
                />)}
            </div>

            <div>
                <Users/>
                </div>


            </div>
            );
    }

}













export default App;