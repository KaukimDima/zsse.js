import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider, connect } from 'react-redux';
import { addRecord, removeRecord } from './actions/recordsActions';
import { getRecords } from './reducers';
import createStore from './store';

const store = createStore();


const mapStatetoProps = state => ({
	records : getRecords(state)
});

const mapDispatchtoProps = {
	addRecord,
	removeRecord
};

const AppWithRedux = connect(
	mapStatetoProps,
	mapDispatchtoProps
)(App);

ReactDOM.render(
	<Provider store={ store }> 
		<AppWithRedux /> 
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
