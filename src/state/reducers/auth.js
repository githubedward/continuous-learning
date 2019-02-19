import { HANDLE_PASSWORD, HANDLE_USERNAME } from "../actions/types";

export default function auth(
  state = {
    username: "",
    password: "",
    isSignedUp: false,
    isLoggedIn: false,
    isLoading: false
  },
  action
) {
  if (!action) return state;
  switch (action.type) {
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
