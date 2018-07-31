import React, { Component } from 'react';

class TodoList extends Component {

	onDeleteList = e => {
		const { id, onDelete } = this.props;
		onDelete(id);
	}

	/* onChangeList = id => {
		const {  }
	} */

  render() {
		const { id, value } = this.props;
    return (
			<ul class="list-group">
				<li class="list-group-item"key={id}>{ value }<span onClick={this.onDeleteList}>x</span></li>
			</ul>
    );
  }
}

export default TodoList;