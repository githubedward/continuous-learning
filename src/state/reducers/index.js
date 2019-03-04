import { combineReducers } from "redux";
import user from "./user/user.reducer";
import main from "./main/main.reducer";

const rootReducer = combineReducers({
  user,
  main
});

export default rootReducer;
