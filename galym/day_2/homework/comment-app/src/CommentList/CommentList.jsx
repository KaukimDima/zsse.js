import React, { Component } from 'react';
import './CommentList.css';

class CommentList extends Component {

	handleDelete = () => {
		const { id, name, onDelete } = this.props;
		onDelete(id, name);
	}
	
  render() {
		const { id, name, comment } = this.props;
    return (
      <div className="CommentList">
				<ul className="list-group">
					<li className="list-group-item" key={id}>
						<h3>{name}</h3>
						<p>{comment}</p>
						<button 
							type="button" 
							className="btn btn-danger"
							onClick={this.handleDelete}
						>Delete</button>
					</li>
				</ul>
      </div>
    );
  }
}

export default CommentList;
