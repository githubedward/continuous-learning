import * as types from "./types";

// sync creators
export function handleUsername(input) {
  return {
    type: types.HANDLE_USERNAME,
    input
  };
}

export function handlePassword(input) {
  return {
    type: types.HANDLE_PASSWORD,
    input
  };
}
