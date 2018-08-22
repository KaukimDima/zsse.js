import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.$tile.title = "title text"
    this.$tile.mainTitle = "MAIN text"
    this.$tile.subtitle = "subtitle text"
    this.$tile.description = "description text"
    this.$tile.overlayDescription="overlay description text"
  }
  
  render() {
    console.log(this)
    return (
      <div className="App">
       <px-tile  ref={(n)  => this.$tile = n} >  </px-tile>
        {/* <px-accordion ref={( n ) => this.$accordion = n}  header-value="Header Caption" show-action>asdf</px-accordion> */}
      </div>
    );
  }
}

export default App;
