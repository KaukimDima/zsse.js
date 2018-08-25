import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './store';
import {connect} from 'react-redux';
import {fetchFireFlyEpisodsRequest} from './actions';
import {fetchTodosRequest} from './actions';
import App from "./App";
import Todos from "./components/Todos";

import {
  getEpisodes,
  getError,
  getIsFetching,
  getIsFetched
} from './reducers';

import {
  getEpisodes as getEpisodes1 ,
  getError as getError1 ,
  getIsFetching as getIsFetching1 ,
  getIsFetched as getIsFetched1 
} from './reducers1/todos_reducers';

const store = createStore();


const mapStateToProps = state => ({
  episodes: getEpisodes(state),
  error: getError(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state)
});

const mapStateToProps1 = state => ({
  episodes1: getEpisodes1(state),
  error1: getError1(state),
  isFetching1: getIsFetching1(state),
  isFetched1: getIsFetched1(state)
});

const mapDispatchToProps = {
  fetchFireFlyEpisodsRequest
};

const mapDispatchToProps1 = {
  fetchTodosRequest
};

const EnhancedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export const EnhancedApp1 = connect(
  mapStateToProps1,
  mapDispatchToProps1
)(Todos);


ReactDOM.render(
  <Provider store={store}>
    <EnhancedApp1 />
  </Provider>,
  document.getElementById('root')
);
