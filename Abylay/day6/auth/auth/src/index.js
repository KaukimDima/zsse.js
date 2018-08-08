import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {addBlog} from './components/actions/blogActions';
// import {getBlogsCount, getBlogs} from './reducer';
import {getBlogs, getBlogsCount} from './reducer';
import {Provider,connect} from 'react-redux';
import createStore from './store/store';

const mapStatetoProps = state => ({
    blogssCount : getBlogsCount(state),
    blogs : getBlogs(state)
})

const mapDispatchtoProps = {
    addBlog
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

