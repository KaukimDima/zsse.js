import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider, connect } from "react-redux";

import {addComment} from "./actions/commentsActions";
import { getCommentsCounts, getComments } from "./reducers";

import createStore from "./store";

const store = createStore();

const mapStateToProps = state => {
  console.log(state);
  return { commentsCount: getCommentsCounts(state), comments: getComments(state) };
};


const mapDispatchToProps = {
  addComment
};

const AppWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppWithRedux />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
