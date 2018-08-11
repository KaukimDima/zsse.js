import React, { Component } from "react";
import "./UserList.css";

class UserList extends Component {

	state = {
		users: [ ],
	}

	fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json =>	this.setState({ users : json }))
	}

  render() {
		console.log(this.state.users);
    return (
      <div className="UserList">
				<h1>Users</h1>
				<ul class="list-group">
					{ this.state.users.map( item =>
						<li 
							className="list-group-item"
							key = {item.id}
						>{item.name} {item.username} <br /> {item.address.city}</li>
					)}
				</ul>
				<button 
					type="button" 
					className="btn btn-success"
					onClick={this.fetchUsers}
				>Fetch</button>
      </div>
    );
  }
}

export default UserList;
