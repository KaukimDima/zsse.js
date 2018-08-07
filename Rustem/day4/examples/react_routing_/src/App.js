import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";
import UserList from './router/UserList'
import GetUser from './router/GetUser'

class App extends Component {

state = {

  user_list:false
};


  render() {
    return (
      <div>

        <Routing/>

      </div>
    );
  }
}

const Routing = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/UserList">UserList</Link>
        </li>

        <li>
            <Link to="/getUser">GetUser</Link>
          </li>
      </ul>

      <hr />

      <Route exact path="/UserList" render={props => <UserList someprop="getUser" {...props} />} />
      <Route path="/getUser/:id" component={GetUser} />
      <Route exact path="/getUser" render={() => <h3>
                Please select a users.
              </h3>} />

    </div>
  </Router>
);

export default App;

