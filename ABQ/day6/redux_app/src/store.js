import {createStore, compose} from "redux";
import rootReduce from "./reducers";

export default initialstate =>
createStore(
    rootReduce,
    initialstate,
    compose(window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : 
        f => f))