import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './store';
import {connect} from 'react-redux';
import {fetchFireFlyEpisodsRequest} from './actions';
import App from "./App";

import {
  getEpisodes,
  getError,
  getIsFetching,
  getIsFetched
} from './reducers';

const store = createStore();


const mapStateToProps = state => ({
  episodes: getEpisodes(state),
  error: getError(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state)
});

const mapDispatchToProps = {
  fetchFireFlyEpisodsRequest
};

const EnhancedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <EnhancedApp />
  </Provider>,
  document.getElementById('root')
);
