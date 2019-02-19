import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

const middlewares = [createLogger()];
const middlewareEnhancers = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancers];
const composedEnhancers = compose(...storeEnhancers);

export default function configureStore(preLoadedState) {
  return createStore(rootReducer, preLoadedState, composedEnhancers);
}
