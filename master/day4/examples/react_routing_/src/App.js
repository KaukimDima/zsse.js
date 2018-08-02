import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link
} from "react-router-dom";
import GetUser from "./router/GetUser";
import UserList from "./router/UserList";
class App extends Component {
  state = {
    ShowList: true
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <Routing />

          <footer>
            <h1>FOOTER</h1>
          </footer>
        </div>
      </div>
    );
  }
}

const Routing = () => {
  return (
    <Router>
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

        <Route exact path="/" component={UserList} />
        <Route path="/getUser/:id" component={GetUser} />
        <Route
          exact
          path="/getUser"
          render={() => <h3>Please select a users.</h3>}
        />
      </div>
    </Router>
  );
};

export default App;
