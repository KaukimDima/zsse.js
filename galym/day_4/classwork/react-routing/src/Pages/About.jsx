import React, { Component } from "react";

class About extends Component {

	state = {
		user : {},
	}
	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users/1`)
			.then(res => res.json())
			.then(json => this.setState( {user : json } ));
	}

	render() {
    return (
      <div className="About">
				<h1>ABOUT</h1>
				{console.log(this.state.user)}
      </div>
    );
  }
}

export default About;
