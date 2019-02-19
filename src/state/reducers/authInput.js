import { HANDLE_PASSWORD, HANDLE_USERNAME } from "../actions/types";

export default function authInput(
  state = {
    username: "",
    password: ""
  },
  action
) {
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
