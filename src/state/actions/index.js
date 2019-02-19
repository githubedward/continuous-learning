import * as types from "./types";

// sync creators
export function handleUsername(e) {
  return {
    type: types.HANDLE_USERNAME,
    input: e.target.value
  };
}

export function handlePassword(e) {
  return {
    type: types.HANDLE_PASSWORD,
    input: e.target.value
  };
}
