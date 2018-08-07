import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link, Redirect } from "react-router-dom";
import UserList from "./router/UserList";
import GetUser from "./router/GetUser";
import axios from 'axios';
// import axios from "./url"; 

// Leanne Graham

const path = {
  home : "/home"
}

const isloggedin = ( loggedin ) => {
  alert(1);
  if(loggedin) 
    return <Redirect to="/login" />;
}


class App extends Component {

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(resp => {
          console.log(resp);
          console.log(resp.data);
      });
  }

  state = {
    isloggedin : false,
    form : {

    },
    id : 1 
  }

  handeInput = (e) => {
    const name = e.target.name;
    let {form} = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: {...form} });
  }

  render() {

    return <div className="App">
        <form className="fomr_login" action="">
          <input type="text" onChange={this.handeInput} name="one" />
          <input type="text" onChange={this.handeInput} name="two" />
          <input type="text" onChange={this.handeInput} name="name" />
          <input type="text" onChange={this.handeInput} name="password" />
          <button>asdas</button>
        </form>
        <Routing isloggedin={this.state.isloggedin} />
        <h1>content</h1>
      </div>;


  }
}

const Routing = (props) => {
    
  
    if (!props.isloggedin) {
      return <div>
          <Router>
            <Redirect to="/login" />
          </Router>
        </div>;
    }

    return <div>
        <Router>
          <div>
            <Redirect to="/login" />
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
            <Route path="/getUser/:id" component={GetUser} />
            {/* <Route exact path="/getUser" render={() => <h3>

                Please select a users.
              </h3>} /> */}
          </div>
        </Router>
      </div>;
};




export default App;

