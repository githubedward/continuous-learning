import {
  HANDLE_PASSWORD,
  HANDLE_USERNAME,
  HANDLE_FULLNAME,
  REQUEST_SIGNUP,
  RECEIVE_SIGNUP,
  UPDATE_STATUS,
  LINK_LOGIN,
  LINK_SIGNUP,
  REQUEST_LOGIN,
  RECEIVE_TOKEN
} from "../actions/types";

export default function auth(
  state = {
    token: "",
    username: "",
    password: "",
    fullname: "",
    status: "",
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
    case UPDATE_STATUS:
      return {
        ...state,
        status: action.status
      };
    case LINK_LOGIN:
      return {
        ...state,
        isSignedUp: true,
        status: "",
        username: "",
        password: "",
        fullname: ""
      };
    case LINK_SIGNUP:
      return {
        ...state,
        isSignedUp: false,
        status: "",
        username: "",
        password: "",
        fullname: ""
      };
    case REQUEST_SIGNUP:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_SIGNUP:
      return {
        ...state,
        isLoading: false,
        isSignedUp: true,
        status: action.result,
        fullname: "",
        password: ""
      };
    case REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_TOKEN:
      return {
        ...state,
        token: action.token,
        isLoading: true,
        isLoggedIn: true,
        status: "",
        username: "",
        password: ""
      };
    default:
      return state;
  }
}
