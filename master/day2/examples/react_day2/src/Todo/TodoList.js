import React, { Component } from "react";
import "./TodoList.css";
import "../App.css";

class Todo extends Component {
  handleChange = (e) => {
    console.log(e.target.value);
    const { id, onChange } = this.props;
    onChange(id);
  };

  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { text, done, id } = this.props;
    return <div className="todo-container alert alert-danger" data-id={id}>
        <input type="checkbox" checked={done} onChange={this.handleChange} />
        <span className={done ? "line-through" : ""}>{text}</span>
        <span onClick={this.handleDelete} className="delete-button">
          &#215;
        </span>
      </div>;
  }
}
export default Todo;
