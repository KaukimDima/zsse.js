 
 import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {
  fetchFireFlyEpisodsRequest,
  fetchFireFlyEpisodsSuccess,
  fetchFireFlyEpisodsFailure
} from './actions';

const middleware = store => next => action => {
  if (
    action.type === fetchFireFlyEpisodsRequest.toString()
  ) {
    fetch('https://zsse.herokuapp.com/api/blog/', {
      method: 'GET',
      mode: 'cors'
    })
      .then(response => {
        return response.json();
      })
      .then(episodes => {
        store.dispatch(
          fetchFireFlyEpisodsSuccess(episodes.response)
        );
      })
      .catch(error => {
        store.dispatch(fetchFireFlyEpisodsFailure(error));
      });
  }
  return next(action);
};

export default () =>
  createStore(
    rootReducer,
    compose(
      applyMiddleware(middleware),
      window.devToolsExtension
        ? window.__REDUX_DEVTOOLS_EXTENSION__()/*  */
        : f => f
    )
  );
  // (state, action) => [...action.payload],
