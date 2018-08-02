import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Routing />

        <footer><h1>FOOTER</h1></footer>
      </div>
    );
  }
}


const Routing = () => (
  <HashRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/product" component={Product} />
    </div>
  </HashRouter>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Product = ({ match }) => {
  console.log(match);
  return <div>
      <h2>Product</h2>
      <ul>
        <li>
          <Link to={`${match.url}/someid1`}>Product1</Link>
        </li>
        <li>
          <Link to={`${match.url}/someid2`}>Product2</Link>
        </li>
        <li>
          <Link to={`${match.url}/someid4`}>Product3</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:id`} component={Id} />
      
      <Route path={match.url} render={() => <h3>
            Please select a Id.
          </h3>} />
    </div>;
}

const Id = ({ match }) =>{
  console.log(match);
  return <div>
      <h3>Your id {match.params.id}</h3>
    </div>;
};

export default App;

