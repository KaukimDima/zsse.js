import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import UserList from "./router/UserList";
import GetUser from "./router/GetUser";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <h1 />
        </header>
          <Routing some={123213} />
        <footer>
          <h1>FOOTER</h1>
        </footer>
      </div>
    );
  }
}

const Routing = ( abc ) => {
    console.log(abc);
    return <Router>
        <div>
          <ul>
            <li>
              <Link to="/">UserList</Link>
            </li>
            <li>
              <Link to="/getUser">GetUser</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" render={props => <UserList someprop="getUser" {...props} />} />
          <Route path="/getUser/:id" component={GetUser} />
          <Route exact path="/getUser" render={() => <h3>
                Please select a users.
              </h3>} />
        </div>
      </Router>;
};


export default App;

