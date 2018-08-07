import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
	
	state = {
		users : []
	}

	componentDidMount() {
		let arr = [];
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => {
				for(let i = 0; i < json.length; i++) {
					arr.push(json[i]);
				}
				this.setState( {users : arr } );
			});
	}

	render() {
		const { users } = this.state;
    return (
      <div className="Todo">
				<h1>Users</h1>
				<ul className="list-group">
					{users.map(el => (
						<li 
							key={el.id}
							className="list-group-item"
						>
							<Link to={`about/${el.id}`} >
								Name: {el.name} <br />
								Email: {el.email} <br />
								City: {el.address.city}
							</Link>
						</li>
          ))}
				</ul>
      </div>
    );
  }
}

export default User;