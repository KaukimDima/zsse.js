import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider,connect} from 'react-redux';
import {addComment} from './actions/commentsActions';
import {getCommentsCount, getComments, getFirstComment} from './reducer';
import createStore from './store';

const mapStatetoProps = state => ({
    commentsCount : getCommentsCount(state),
    comments : getComments(state)
})

const mapDispatchtoProps = {
    addComment
};

const AppWithRedux = connect (
    mapStatetoProps, 
    mapDispatchtoProps
)(App);

const store = createStore();

ReactDOM.render(
<Provider store={store} > 
    <AppWithRedux /> 
    </Provider> 
, document.getElementById('root'));
registerServiceWorker();



