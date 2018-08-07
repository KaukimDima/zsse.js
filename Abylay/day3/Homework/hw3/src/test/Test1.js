import React, { Component } from "react";

class TodoShow extends Component {
  
  render() {
  const{result}=this.props;
  console.log("result", result);
    return (
      <div>
        <h1>
          To Do Show
          </h1>
          <div> {result.map( (el) => <div>
         ывываывсыв
           <h3 > {el.title} </h3>
          </div> )}
            </div>
              
      </div>
    );
  }
}

export default TodoShow;
