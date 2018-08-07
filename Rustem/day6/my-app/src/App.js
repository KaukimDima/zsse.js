import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {

    commentBody: ""
    
  };
  
  handleClick = e => {
  
    const {addComment} = this.props;

    const {commentBody} = this.state;

    addComment(commentBody);
  
  }

  render() {

    const{comments} = this.props;

    return (
      <div className="App">
        <input type = "button" value="click" onClick ={this.handleClick} />

        <div>

          {/* {comments.map((el,i) => <div key = {i} > {el} </div>)} */}

          </div>
      </div>
    );
  }
}

export default App;
