import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

class UserList extends Component {

state = {

  users: []


}

componentDidMount(){


  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState({users: json.slice(0,10)}));
}

  render() {
    console.log('render', this.state)

    return (
      <div>

        <header>
          <div> 
            
          {this.state.users.map((el, i) => <div key={i}>

          

              <span> Name:  {el.name}  </span>
              

              <span>email: {el.email}</span>


            </div>)}

             </div>
        </header>
      </div>
    );
  }
}
export default UserList;