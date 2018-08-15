import React, { Component } from 'react';
import './App.css';

import Accordion from './triggers/accordion';

class App extends Component {
  render() {


    console.log(this)

    
    return (
      <div>

        <h1> Predix </h1>


<Accordion/>











      </div>
    );
  }
}

export default App;
