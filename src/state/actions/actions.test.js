import * as types from "./types";
import * as actions from "./index";

describe("actions", () => {
  it("should handle username input", () => {
    const input = "a";
    const expectedAction = {
      type: types.HANDLE_USERNAME,
      input
    };
    expect(actions.handleUsername(input)).toEqual(expectedAction);
  });

  it("should handle password", () => {
    const input = "a";
    const expectedAction = {
      type: types.HANDLE_PASSWORD,
      input
    };
    expect(actions.handlePassword(input)).toEqual(expectedAction);
  });
});
