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
    fetch('http://api.tvmaze.com/shows/180/episodes', {
      method: 'GET',
      mode: 'cors'
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(episodes => {
        store.dispatch(
          fetchFireFlyEpisodsSuccess(episodes)
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
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );
