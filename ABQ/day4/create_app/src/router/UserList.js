import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

class UserList extends Component { 

state = {
    users : []
};

componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users/`).
    then(data => data.json()).
    then(json => this.setState({ users: json}))
    console.log(this.state.users)
}


render(){
    console.log(this.state.users);

return(
    <Router>
    <div> 
    {this.state.users.map(            
            (el, i) => 
            <Link to   = "/userList/{el.id}"> 
            <p key = {i}> {el.email}  </p> 
            </Link>

     <Route path="/userList/:id" render = {  }/>
    )} 


    </div>
    </Router>
)
}
};

const justFunc = () => {

}


export default UserList;