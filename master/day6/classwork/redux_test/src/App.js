import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    commentBody: ""
  };

  handleClick =  e => {
    const { addComment } = this.props;
    addComment("texttexrt");
  };

  render() {
    const {comments} = this.props;
    return (
      <div className="App">
        <input type="button" value="click me" onClick={this.handleClick} />
        <div>
          {comments.map((el,i) => <div key={i}><b>{el}</b></div>)}
        </div>
      </div>
    );
  }
}

export default App;
