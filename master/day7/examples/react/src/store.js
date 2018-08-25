import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {
  fetchFireFlyEpisodsRequest,
  fetchFireFlyEpisodsSuccess,
  fetchBlogFail
} from './actions';
import { todos_middleware } from "./middleware";

const middleware = store => next => action => {
  console.log("action", action)
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
        console.log('succes')
        store.dispatch(
          fetchFireFlyEpisodsSuccess(episodes.response, episodes.response)
        );
      })
      .catch(error => {
        store.dispatch(fetchBlogFail(error));
      });
  }
  return next(action);
};

export default () =>
  createStore(
    rootReducer,
    compose(
      applyMiddleware(middleware, todos_middleware),
      window.devToolsExtension
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );
