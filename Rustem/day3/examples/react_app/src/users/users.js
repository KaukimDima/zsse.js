
import React, { Component } from 'react';

class Users extends Component {

    state = {

        users: []
    }


getUsers = () => {


  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => this.setState({users: json}));

  

    }

    render( ) {

        const {users} = this.state;


        return (
                
        <div>

            <h1> clik to get users </h1>

            <button onClick = { this.getUsers}> Click </button>

            <div> {users} </div>

  


        </div>


        );
    }

    
}
export default Users;
