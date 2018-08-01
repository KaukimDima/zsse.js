import React, { Component } from 'react';
import './App.css';
import CommentList from './comments/commentList';
import SendComment from './comments/sendComment';
import User from './users/users';

let id = 0;

function getTodoId() {
  id += 1;
  return id;
}

class App extends Component {
  state = {

    name: "",

    list: [

        {
        id: 23,
        comment:"#1",
        name:"Rus"
     },
     {
        id: 24,
        comment:"#2",
        name:"Rustem"
     }
    ]
 }

 addComment = (name1, comment) =>{

  const {list} = this.state;

  this.setState({name:name1,list: [...list, {

    id: getTodoId(),
    name: name1,
    comment: comment

  }]})

 }

 deleteToDo = (name, id) => {

  const{list} = this.state;
  if(name !== this.state.name) return;
  const newList = list.filter(el => id !== el.id);
  this.setState({
    list : [...newList]
  });
 }



  render() {

    const {list} = this.state;

    return (


     <div>
        <div className ="send__message">
        <SendComment 
       commentAdd={this.addComment}
        />
        </div>
      <div className ="commentlist">

        {list.map(el => (

          <CommentList 

          key={el.id}
          name={el.name}
          comment={el.comment}
          id={el.id}
          deleteToDo = {this.deleteToDo} />
        )
      )
      }
       </div>  

       <div className ="users">
        <User/>
        </div>

       

       
           
       </div>
    );
  }
}



export default App;
