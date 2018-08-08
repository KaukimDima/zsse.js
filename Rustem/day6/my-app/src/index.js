import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider, connect } from 'react-redux';
import { addComment } from './actions/commentsActions';
import { getCommentsCounts, getComments } from './reducers';
import createStore from './store';

const store = createStore();


const mapStatetoProps = state => ({
	commentsCount : getCommentsCounts(state),
	comments: getComments(state)
});

const mapDispatchtoProps = {
	addComment
};

const AppWithRedux = connect(
	mapStatetoProps,
	mapDispatchtoProps
)(App);

ReactDOM.render(
	<Provider store={ store }> 
		<AppWithRedux /> 
	</Provider>, 
	document.getElementById('root'));
	registerServiceWorker();
