import React, { Component } from "react";
import "./FetchTodoList.css";

class FetchTodoList extends Component {
  state = {
    list: [],
    todosId: []
  };

  componentDidMount() {
		const { todosId } = this.state;
		const { value } = this.props;
		this.setState({ todosId : value });
		console.log(`value ${value}`);
    let arr = [];
    todosId.forEach(i => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
        .then(response => response.json())
        .then(json => {
          arr.push(json);
					this.setState({ list: arr });
				});
    });
  }

  render() {
    return (
      <div className="FetchTodoList">
        <ul>
          {this.state.list.map(el => (
						<li key={el.id}>
							{el.title}
							<span className={ el.completed ? "completed" : "notCompleted"}>Done</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchTodoList;
