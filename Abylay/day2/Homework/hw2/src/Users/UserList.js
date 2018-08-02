import React, { Component } from 'react';


class Users extends Component {
    state ={
        users: []
    }
    
    getUsers = e => {
    const{users}=this.state;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({users:json}));
    }
    render() {
      return <div>
          
              <li> </li>
                  <div>
                      <h1> Нажми чтобы получить всех пользователей </h1>
                      <button onClick={this.getUsers}> Get users
                      </button>
                      </div>
                      <ul>
                          {this.state.users.map(el => <li key={el.id}>
                          
                           <div>{el.name}</div>
                           <div>{el.phone}</div>  
                           <hr/>
                           </li>
                           )}
              </ul>
      </div>
    }
} 
export default Users;