import React, { Component } from "react";

class User extends Component {
	
	state = {
		users : [],
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => this.setState({ users : json }));
		console.log(this.state);
	}

/* 	state = {
		users: [],
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => this.setState({ users : json }));
		console.log(this.state);
	} */

	render() {
    return (
      <div className="Todo">
				<h1>Users</h1>
      </div>
    );
  }
}

export default User;