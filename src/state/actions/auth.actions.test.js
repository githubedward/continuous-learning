import * as types from "./types";
import * as actions from "./auth.actions";

describe("auth.actions", () => {
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

  it("should handle fullname", () => {
    const input = "a";
    const expectedAction = {
      type: types.HANDLE_FULLNAME,
      input
    };
    expect(actions.handleFullName(input)).toEqual(expectedAction);
  });

  it("should update status", () => {
    const status = "test status";
    const expectedAction = {
      type: types.UPDATE_STATUS,
      status
    };
    expect(actions.updateStatus(status)).toEqual(expectedAction);
  });

  it("should link to login page", () => {
    const expectedAction = {
      type: types.LINK_LOGIN
    };
    expect(actions.linkLogin()).toEqual(expectedAction);
  });

  it("should link to signup page", () => {
    const expectedAction = {
      type: types.LINK_SIGNUP
    };
    expect(actions.linkSignup()).toEqual(expectedAction);
  });

  it("should handle signup", () => {});

  it("should handle login", () => {});
});
