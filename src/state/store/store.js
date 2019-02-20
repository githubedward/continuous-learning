import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middlewares = [createLogger(), thunk];
const middlewareEnhancers = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancers];
const composedEnhancers = compose(...storeEnhancers);

export default function configureStore(preLoadedState) {
  return createStore(rootReducer, preLoadedState, composedEnhancers);
}
