import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";

const logger = createLogger();

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(logger));
}
