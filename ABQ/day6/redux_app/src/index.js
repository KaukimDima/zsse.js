import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {addComment} from "./actions/commentsActions";
import { Provider, connect } from "react-redux"; 


const mapStatetoProps = state => ({
    commentsCount : state.comment.count,
    comments : state.comment.comment
})

const mapDispatchToProps = {
addComment
}

const AppWithRedux = connect(
    mapStatetoProps,
    mapDispatchToProps
)(App);


ReactDOM.render(
<Provider>
    <App />
</Provider>

    , document.getElementById('root'));
registerServiceWorker();
