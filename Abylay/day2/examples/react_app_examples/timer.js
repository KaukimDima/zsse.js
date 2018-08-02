import React, { Component } from "react";

class Timer extends Component {
  render() {
    return (
      <div>
        <p>Hello</p>
        <p> {new Date().toString()} </p>
      </div>
    );
  }
}

export default Timer;
