import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {
  fetchFireFlyEpisodsRequest,
  fetchFireFlyEpisodsSuccess,
  fetchBlogFail
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
      applyMiddleware(middleware),
      window.devToolsExtension
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );
