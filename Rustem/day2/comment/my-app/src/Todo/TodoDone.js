import React, { Component } from "react";

class TodoDone extends Component {
  handleChange = e => {
    console.log(e.target.value);
    const { id, onChange } = this.props;
    onChange(id);
  };

  render() {
    const { text, done } = this.props;
    return (
      <div className="todo-container alert alert-success col-sm-10">
        <input
          onClick={this.handleDoneState}
          type="checkbox"
          checked={done} 
          onChange={this.handleChange}
        />
        <p>{text}</p>
      </div>
    );
  }
}
export default TodoDone;
