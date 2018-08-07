import { createStore, compose } from 'redux';
import rootReduce from "./reducer";

export default initialState =>
createStore (
    rootReduce,
    initialState,
    compose(
        window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
)