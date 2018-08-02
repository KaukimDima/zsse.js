import React, { Component } from 'react';


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
    <div> <p>{this.state.users.map( 
        (el, i) => 
        <p key = {i}>{el.email}</p>
    )} </p>
    </div>
)
}
};



export default UserList;