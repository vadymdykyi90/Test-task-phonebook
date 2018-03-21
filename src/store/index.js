import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(logger));

const state = {};
const store = createStore(reducer, state, enhancer);

export default store;
