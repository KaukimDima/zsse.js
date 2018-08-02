import React, { Component } from 'react';
import './App.css';
import CommentList from './Comments/CommentList';
import SendComment from './Comments/SendComment';
import Users from './Users/UserList';
let id = 0; 

function getId() {
  id += 1;
  return id;
}

class App extends Component {
    state ={
        name:"",
        commentlist: [{
            name:1,
            comment:2,
            id:''
        }]
    }


    addComment = (name_new, comment) => {
        let id = getId();
        const {commentlist}=this.state;
        this.setState({name:name_new,commentlist: [...commentlist, {
            id:id,
            name:name_new,
            comment:comment
        }]});
    };

    onDeleteApp = (id , name)=> {
        const{commentlist}=this.state;
        if (name!==this.state.name) return;
       const newArray=commentlist.filter( e =>
         e.id !==id
       );
       this.setState({commentlist: [ ...newArray]});
       
       };

   render() {
       const {commentlist}=this.state;
       console.log(commentlist)
       return <div>
           <div className="SendComment">
           <SendComment addComment={this.addComment}/>
           </div>
           
           <div className="CommentList">
           {commentlist.map(comment => 
            <CommentList
              id={comment.id}
              key={comment.id}
              name={comment.name}
              comment={comment.comment}
              onDeleteApp={this.onDeleteApp}
              />
            )}
               </div>

           <div>
               <Users />
               </div>
           </div>
   }
}



export default App;