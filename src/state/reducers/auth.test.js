import auth from "./auth";
import * as types from "../actions/types";

const deepFreeze = require("deep-freeze");

describe("auth", () => {
  const initialState = {
    username: "",
    password: "",
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
});
