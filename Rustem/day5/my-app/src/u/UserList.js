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
    const {users} = this.state;
return(
    
            <div>
        <ul>
    {users.map(            
            (el) => 
            
                <div key = {el.id}> 
                 Name: {el.name}  
                 
                 email:  {el.email}

                </div>          
    )}
    </ul>
    
    </div>
    
)}
};

export default UserList;