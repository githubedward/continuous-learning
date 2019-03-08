import { combineReducers } from "redux";
import user from "./user/user.reducer";
import main from "./main/main.reducer";
import profile from "./profile/profile.reducer";
import { reducer as reduxFormReducer } from "redux-form";

const rootReducer = combineReducers({
  user,
  main,
  profile,
  form: reduxFormReducer
});

export default rootReducer;
