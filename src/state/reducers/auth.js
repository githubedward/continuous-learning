import {
  HANDLE_PASSWORD,
  HANDLE_USERNAME,
  HANDLE_FULLNAME
} from "../actions/types";

export default function auth(
  state = {
    username: "",
    password: "",
    fullname: "",
    isSignedUp: false,
    isLoggedIn: false,
    isLoading: false
  },
  action
) {
  if (!action) return state;
  switch (action.type) {
    case HANDLE_FULLNAME:
      return {
        ...state,
        fullname: action.input
      };
    case HANDLE_USERNAME:
      return {
        ...state,
        username: action.input
      };
    case HANDLE_PASSWORD:
      return {
        ...state,
        password: action.input
      };
    default:
      return state;
  }
}
