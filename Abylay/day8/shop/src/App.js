import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Company from './components/company/company';
import Client from './components/client/client';
import Customer from './components/customer/customer';



class App extends Component {
  state = {
        show : null
  }

  
  

  render() {
    const {show} = this.state;
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Online Market</h1>
        </header>
        <p className="App-intro">
          To get started, choose your option
        </p>
        <p>
          <button type="button" className="btn btn-primary" onClick={ () => this.setState({show:false})} > Client </button>
        </p>
        <p>
          <button type="button" className="btn btn-primary" onClick={ () => this.setState({show:true})}> Customer </button>
        </p>

        {show ? <Client /> : <Customer />}

       
      </div>
    );
  }
}

export default App;
