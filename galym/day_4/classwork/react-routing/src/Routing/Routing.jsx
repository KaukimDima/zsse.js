import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import User from '../Pages/User';
import urls from './urls'

class Routing extends Component {
  render() {
    return (
      <div className="Routing">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={urls.about}>About</Link>
              </li>
              <li>
                <Link to="/users">User</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={ Home } />
            <Route path="/about/:id" component={ About } />
            <Route path="/users" component={ User } />
          </div>
        </Router>
      </div>
    );
  }
}

export default Routing;
