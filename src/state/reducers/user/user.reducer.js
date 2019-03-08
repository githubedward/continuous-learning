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
  RECEIVE_TOKEN,
  AUTHENTICATED,
  LOGOUT,
  UPDATE_USER
} from "../../actions/user/user.types";

export default function user(
  state = {
    usernameInput: "",
    passwordInput: "",
    fullnameInput: "",
    status: "",
    isSignedUp: false,
    isLoggedIn: false,
    isLoading: false,
    user: {
      username: "",
      fullname: ""
    }
  },
  action
) {
  if (!action) return state;
  switch (action.type) {
    case HANDLE_FULLNAME:
      return {
        ...state,
        fullnameInput: action.input
      };
    case HANDLE_USERNAME:
      return {
        ...state,
        usernameInput: action.input
      };
    case HANDLE_PASSWORD:
      return {
        ...state,
        passwordInput: action.input
      };
    case UPDATE_STATUS:
      return {
        ...state,
        status: action.status,
        isLoading: false,
        passwordInput: "",
        fullnameInput: ""
      };
    case LINK_LOGIN:
      return {
        ...state,
        isSignedUp: true,
        status: "",
        usernameInput: "",
        passwordInput: "",
        fullnameInput: ""
      };
    case LINK_SIGNUP:
      return {
        ...state,
        isSignedUp: false,
        status: "",
        usernameInput: "",
        passwordInput: "",
        fullnameInput: ""
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
        fullnameInput: "",
        passwordInput: ""
      };
    case REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_TOKEN:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        status: "",
        passwordInput: ""
      };
    case AUTHENTICATED:
      return {
        ...state,
        isSignedUp: true,
        isLoggedIn: true,
        user: action.user
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isSignedUp: true,
        isLoggedIn: false
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.data
      };
    default:
      return state;
  }
}
