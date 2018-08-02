import React, { Component } from 'react';
class TodoList extends Component {

    Ondeletetodolist = e =>  {
      const {onDeleteApp}=this.props;
     onDeleteApp(this.props.id);
    }
  
  
      render() {
      const {id, text, done } = this.props;
      return (<div>
          <h1 >{text}  <span className="cross"  onClick={this.Ondeletetodolist}>&#215;</span>  </h1>
         
        </div>
      );
    }
    }
    export default TodoList;