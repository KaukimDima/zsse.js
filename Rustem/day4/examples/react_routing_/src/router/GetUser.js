import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

class GetUser extends Component {
    state = {

        user:[1]
    };

    componentDidMount(){


fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(json => this.setState({user: json}));
            
      }
handleSub = e =>{

    e.target.preventDefault();
}
  render() {
    return (
        <div>

          {this.props.match.params.id}

      </div>
    );
  }
}

export default GetUser