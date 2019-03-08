import { combineReducers } from "redux";
import user from "./user/user.reducer";
import main from "./main/main.reducer";
import profile from "./profile/profile.reducer";

const rootReducer = combineReducers({
  user,
  main,
  profile
});

export default rootReducer;
