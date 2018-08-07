import React, { Component } from "react";

class About extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(json => this.setState({ user: json }));
  }

  render() {
    console.log(this.props);
    const { user } = this.state;
    return (
      <div className="About">
        <h1>ABOUT</h1>
        <div className="card">
          <div className="card-body" key={user.id}>
            Name: { user.name } <br />
            Email: { user.email } <br />
            Phone: { user.phone } <br />
            Website: { user.website }
          </div>
        </div>
      </div>
    );
  }
}

export default About;
