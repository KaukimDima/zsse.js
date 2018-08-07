import React, { Component } from 'react';
import './App.css';
import createStore  from './store.js';





class App extends Component {
  state = {
    commentBody : " "
  };
  handlechange=event =>  {
    this.setState({ commentBody: event.target.value})
  }
  handleClick = event => {
  const {addComment}=this.props;
  const {commentBody}=this.state;
  if (event.keyCode===13) {
    addComment(commentBody);
    this.setState({commentBody:' '})
  }
  
  };
  render() {
    const {commentBody}=this.state;
    return (
      <div className="App">
        < input type="text"  onKeyDown={this.handleClick} onChange={this.handlechange} />
    
        
      </div>
    );
  }
}

export default App;
