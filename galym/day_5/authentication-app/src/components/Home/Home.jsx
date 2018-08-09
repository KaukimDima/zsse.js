import React, { Component } from 'react';
import { addRecord, removeRecord } from '../../actions/recordsActions';
import { getRecords } from '../../reducers';
import { connect } from 'react-redux';

class Home extends Component {

	constructor( props ) {
		super();
		console.log(props)
	};

	state = {
		recordBody: ''
	};

	handleKeyDown = e => {
		const { addRecord } = this.props;
		const { recordBody } = this.state;
		if (e.keyCode === 13) {
			addRecord(recordBody);
			this.setState({ recordBody: '' });
		}
	};

	handleChange = e => {
		this.setState({ recordBody: e.target.value });
	};
	
	removeItem = e => {
		const { removeRecord } = this.props;
		removeRecord(e.target.dataset.index);
	};
	
	render() {
		const { records } = this.props;
		console.log(records);
		return <div className="Home">
        <h1>My Blog</h1>

        <input value={this.state.recordBody} onKeyDown={this.handleKeyDown} onChange={this.handleChange} placeholder="Type text..." />

        <div>
          {records.map((el, i) => (
            <h3 data-index={el.id} key={i} onClick={this.removeItem}>
              {el.text}
            </h3>
          ))}

        </div>
      </div>;
  }
}

const mapStatetoProps = state => ({
	records : getRecords(state)
});

const mapDispatchtoProps = {
	addRecord,
	removeRecord
}; 

export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(Home);
