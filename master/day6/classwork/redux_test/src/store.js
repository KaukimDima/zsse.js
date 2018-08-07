import { createStore, compose } from "redux";
import rootReducer from "./reducers";

export default initalState =>
  createStore(
    rootReducer,
    initalState,
    compose(
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
