import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    headerValue : "header value",
    showAction : true,
    status : true,
    icons : 'icons',
    disabled : true
  }
  componentDidMount() {
    console.log(this.$accordion)
  }
  render() {
    return (
      <div className="App">
        <px-accordion-group>
          <px-accordion
            header-value={this.state.headerValue} 
            show-action={this.state.showAction} 
            status={this.state.status} 
            disabled={this.state.disabled}>
              Accordion content goes here.
        </px-accordion>
          <px-accordion 
            ref={(n)=> this.$accordion = n} 
            onClick={(e) => console.log(this.props) } 
            header-value={this.state.headerValue} 
            show-action={this.state.showAction} 
            status={this.state.status} 
            >
              Accordion content goes here.
          </px-accordion>
        </px-accordion-group>
      </div>
    );
  }
}

export default App;
