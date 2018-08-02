import React, { Component } from "react";

class Todo extends Component {
  render() {

    const {result} = this.props;

    return (
        <div>

            <h1> ToDo </h1>
            {result.map( (el, i) => <div key = {i}>


            <h1> {el.title} </h1>

            <span className = {el.completed ? "complete" : "uncomplete"} >

            status


            </span>
                      
            </div> )  }
        </div>


    )}
}

export default Todo;
