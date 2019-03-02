import { combineReducers } from "redux";
import auth from "./auth/auth.reducer";
import main from "./main/main.reducer";

const rootReducer = combineReducers({
  auth,
  main
});

export default rootReducer;
