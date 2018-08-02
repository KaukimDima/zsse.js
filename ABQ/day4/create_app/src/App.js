import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";
import GetUser from './router/GetUser';
import UserList from "./router/UserList"
class App extends Component {

  state = {
    ShowList: true
  }


  render() {
    return (
    <div>
 <div className="App">

<header className="App-header">
  <h1 className="App-title">Welcome to React</h1>
</header>



      <Routing />

       <footer><h1>FOOTER</h1></footer>
      </div>
      
      </div>



    );
}
}

const Routing = () => (
  <Router>
       <ul>
          <li><Link to="/userList">User List</Link></li>
          <li><Link to="/topics">Get user by id</Link></li>
        </ul>
        <Route exact path = "/userList" component = {UserList} />
        <Route exact path = "/getUser" component = {GetUser} />

  </Router>
);

  
export default App;

