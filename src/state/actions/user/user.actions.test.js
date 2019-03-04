import * as types from "./user.types";
import * as actions from "./user.actions";

describe("user.actions", () => {
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

  it("should handle signup", () => {
    // request signup
    const data = {
      fullname: "Ed",
      username: "test",
      password: "test"
    };
    let expectedAction = {
      type: types.REQUEST_SIGNUP,
      data
    };
    expect(actions.requestsSignup(data)).toEqual(expectedAction);
    // receive result
    const result = "Success";
    expectedAction = {
      type: types.RECEIVE_SIGNUP,
      result
    };
    expect(actions.receiveSignup(result)).toEqual(expectedAction);
  });

  it("should handle login", () => {
    // request login
    const data = {
      username: "test",
      password: "test"
    };
    let expectedAction = {
      type: types.REQUEST_LOGIN,
      data
    };
    expect(actions.requestLogin(data)).toEqual(expectedAction);
    // receive token
    const token = "test";
    expectedAction = {
      type: types.RECEIVE_TOKEN,
      token
    };
    expect(actions.receiveToken(token)).toEqual(expectedAction);
    localStorage.setItem("token", token);
    expect(localStorage.getItem("token")).toEqual(token);
  });

  it("should authenticate user", () => {
    const user = {
      username: "test",
      password: "test"
    };
    const expectedAction = {
      type: types.AUTHENTICATED,
      user
    };
    expect(actions.authenticated(user)).toEqual(expectedAction);
  });

  it("should logout and remove token from localStorage", () => {
    localStorage.setItem("token", "test");
    const expectedAction = {
      type: types.LOGOUT
    };
    expect(actions.logout()).toEqual(expectedAction);
    expect(localStorage.removeItem("token")).toBeFalsy();
  });
});
