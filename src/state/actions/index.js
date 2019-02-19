import * as types from "./types";

// sync creators
export function handleUsername(input) {
  return {
    type: types.HANDLE_USERNAME,
    input: input
  };
}

export function handlePassword(input) {
  return {
    type: types.HANDLE_PASSWORD,
    input: input
  };
}

export function handleSignup(data) {
  return {
    type: types.HANDLE_SIGNUP,
    data
  };
}

export function handleLogin(data) {
  return {
    type: types.HANDLE_LOGIN,
    data
  };
}
