import user from "./user.reducer";
import * as types from "../../actions/user/user.types";

const deepFreeze = require("deep-freeze");

describe("user.reducers", () => {
  const initialState = {
    usernameInput: "",
    passwordInput: "",
    fullnameInput: "",
    status: "",
    isSignedUp: false,
    isLoggedIn: false,
    isLoading: false
  };

  deepFreeze(initialState);

  it("should return initial state", () => {
    expect(user(initialState, undefined)).toEqual(initialState);
  });

  it("should handle HANDLE_USERNAME", () => {
    const input = "a";
    const action = {
      type: types.HANDLE_USERNAME,
      input
    };
    const nextState = {
      ...initialState,
      usernameInput: input
    };
    expect(user(initialState, action)).toEqual(nextState);
  });

  it("should handle HANDLE_PASSWORD", () => {
    const input = "a";
    const action = {
      type: types.HANDLE_PASSWORD,
      input
    };
    const nextState = {
      ...initialState,
      passwordInput: input
    };
    expect(user(initialState, action)).toEqual(nextState);
  });

  it("should handle HANDLE_FULLNAME", () => {
    const input = "a";
    const action = {
      type: types.HANDLE_FULLNAME,
      input
    };
    const nextState = {
      ...initialState,
      fullnameInput: input
    };
    expect(user(initialState, action)).toEqual(nextState);
  });

  it("should UPDATE_STATUS", () => {
    const status = "Account not found";
    const action = {
      type: types.UPDATE_STATUS,
      status
    };
    const nextState = {
      ...initialState,
      status,
      isLoading: false
    };
    expect(user(initialState, action)).toEqual(nextState);
  });

  it("should HANDLE_SIGNUP", () => {
    const data = {
      fullname: "Edward",
      username: "webed",
      password: "123456"
    };
    // test REQUEST_SIGNUP
    let action = {
      type: types.REQUEST_SIGNUP,
      data
    };
    let nextState = {
      ...initialState,
      isLoading: true
    };
    expect(user(initialState, action)).toEqual(nextState);
    // test resolve RECEIVE_SIGNUP
    const result = "User successfully registered";
    action = {
      type: types.RECEIVE_SIGNUP,
      result
    };
    nextState = {
      ...initialState,
      isLoading: false,
      isSignedUp: true,
      status: action.result,
      fullnameInput: ""
    };
    expect(user(initialState, action)).toEqual(nextState);
    // test reject RECEIVE_SIGNUP
  });

  it("should handle login", () => {
    // test request login
    const data = {
      username: "webed",
      password: "123456"
    };
    let action = {
      type: types.REQUEST_LOGIN,
      data
    };
    let nextState = {
      ...initialState,
      isLoading: true
    };
    expect(user(initialState, action)).toEqual(nextState);
    // test receive token
    const token = "test";
    action = {
      type: types.RECEIVE_TOKEN,
      token
    };
    nextState = {
      ...initialState,
      isLoggedIn: true,
      isLoading: false,
      status: "",
      usernameInput: "",
      passwordInput: ""
    };
    expect(user(initialState, action)).toEqual(nextState);
  });
  it("should receive user info when authenticated", () => {
    const userInfo = {
      username: "test",
      fullname: "Test"
    };
    const action = {
      type: types.AUTHENTICATED,
      user: userInfo
    };
    const nextState = {
      ...initialState,
      isSignedUp: true,
      isLoggedIn: true,
      user: action.user
    };
    expect(user(initialState, action)).toEqual(nextState);
  });
  it("should logout", () => {
    const action = {
      type: types.LOGOUT
    };
    const nextState = {
      ...initialState,
      user: {},
      isSignedUp: true,
      isLoggedIn: false
    };
    expect(user(initialState, action)).toEqual(nextState);
  });
});
