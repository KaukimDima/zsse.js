import React, { Component } from "react";

const style = {
  color: 'green', 
};


class TodoShow extends Component {
  render() {
    const {result}= this.props;
    return <div>
        <h1>TodoShow</h1>
        <div>
          {result.map((el, i) => <div key={i}>
              <h3> {el.title}</h3>
              <span
                className={el.completed ? "completed" : "not_completed"}
              >
                Done{" "}
              </span>
              <span style={el.completed ? { color: "green" } : { color: "red" }}>Done </span>
            </div>)}
        </div>
      </div>;
  }
}

export default TodoShow;
