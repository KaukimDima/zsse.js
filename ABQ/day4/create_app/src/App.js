import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";
import UserList from "./router/UserList";
import GetUser from "./router/GetUser";
import EachUser from "./router/EachUser";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <h1 />
        </header>
          <Routing />
        <footer>
          <h1>FOOTER</h1>
        </footer>
      </div>
    );
  }
}

const Routing = () => {
    // state = {

    // }
    return (
    <div>
    <Router>
        <div>
          <ul>
            <li>
              <Link to="/">UserList</Link>
            </li>
            <li>
              <Link to="/getUser">GetUser</Link>
            </li>
            <li>
              <Link to="/eachUser">EachUser</Link>
            </li>
            
          </ul>

          <hr />

          <Route exact path="/" render={props => <UserList someprop="getUser" {...props} />} />
          <Route path="/getUser" component={GetUser} />
          <Route path="/eachUser" component={EachUser} />
          {/* <Route exact path="/getUser" render={() => <h3>
                Please select a users.
              </h3>} /> */}
        </div>
      </Router>
      </div>
    )
};




export default App;

