import {createStore, compose} from 'redux';
import rootReducer from './reducers';

export default (initialState = {}) => {
  console.log(initialState);
  return createStore(
    rootReducer,
    initialState,
    compose(
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
}
