import React, { Component } from "react";
import {
  Route,
  Link
} from "react-router-dom";

class GetUser extends Component {
  state = {
      user : {}
  };

  componentDidMount () {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
          .then(data => data.json())
          .then(json => this.setState({ user: json }));
  }

  handleSubmit = e => {
      e.target.preventDefault();
  }
  render() {
      console.log(this.props);

    const {user} = this.props; 
    if(user)
    return <div>
        {user.name}
        {user.username}
        {user.phone}
        {user.website}
      </div>;
    else return  <div />;
  }
}

export default GetUser;
