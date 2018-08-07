import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";
import EachUser from './EachUser'
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
            
                <Link to = {`/eachUser/${el.id}`}> 
                 <p key={el.id}>{el.email}</p>   
                </Link>          
    )}
    </ul>
    {/* {users.map(            
            (el) => 

     <Route exact path={`/eachUser/${el.id}`} 
     render={props => <EachUser key = {props.id} someprops={el.id} {...props} />}  */}
    {/* //  render = {
    //      () => 
    //         <h1> ID: {el.id} </h1>
         
    //  } 
    />
    )} */}
    </div>

    
)}
};



export default UserList;