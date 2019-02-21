import auth from "./auth.reducer";
import * as types from "../actions/types";

const deepFreeze = require("deep-freeze");

describe("auth", () => {
  const initialState = {
    username: "",
    password: "",
    status: "",
    isSignedUp: false,
    isLoggedIn: false,
    isLoading: false
  };
  deepFreeze(initialState);

  it("should return initial state", () => {
    expect(auth(initialState, undefined)).toEqual(initialState);
  });

  it("should handle HANDLE_USERNAME", () => {
    const input = "a";
    const action = {
      type: types.HANDLE_USERNAME,
      input
    };
    const nextState = {
      ...initialState,
      username: input
    };
    expect(auth(initialState, action)).toEqual(nextState);
  });

  it("should handle HANDLE_PASSWORD", () => {
    const input = "a";
    const action = {
      type: types.HANDLE_PASSWORD,
      input
    };
    const nextState = {
      ...initialState,
      password: input
    };
    expect(auth(initialState, action)).toEqual(nextState);
  });

  it("should handle HANDLE_FULLNAME", () => {
    const input = "a";
    const action = {
      type: types.HANDLE_FULLNAME,
      input
    };
    const nextState = {
      ...initialState,
      fullname: input
    };
    expect(auth(initialState, action)).toEqual(nextState);
  });

  it("should UPDATE_STATUS", () => {
    const status = "Account not found";
    const action = {
      type: types.UPDATE_STATUS,
      status
    };
    const nextState = {
      ...initialState,
      status
    };
    expect(auth(initialState, action)).toEqual(nextState);
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
    expect(auth(initialState, action)).toEqual(nextState);
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
      fullname: ""
    };
    expect(auth(initialState, action)).toEqual(nextState);
    // test reject RECEIVE_SIGNUP
  });
});
