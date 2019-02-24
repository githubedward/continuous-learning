import * as types from "./types";
import axios from "axios";
import * as urls from "../../helpers/url";
import * as helper from "../../helpers/functions";

// sync creators

export const handleUsername = input => {
  return {
    type: types.HANDLE_USERNAME,
    input
  };
};

export const handlePassword = input => {
  return {
    type: types.HANDLE_PASSWORD,
    input
  };
};

export const handleFullName = input => {
  return {
    type: types.HANDLE_FULLNAME,
    input
  };
};

export const updateStatus = status => {
  return {
    type: types.UPDATE_STATUS,
    status
  };
};

export const linkLogin = () => {
  return {
    type: types.LINK_LOGIN
  };
};

export const linkSignup = () => {
  return {
    type: types.LINK_SIGNUP
  };
};

const requestsSignup = data => {
  return {
    type: types.REQUEST_SIGNUP,
    data
  };
};

const receiveSignup = result => {
  return {
    type: types.RECEIVE_SIGNUP,
    result
  };
};

export const handleSignup = data => {
  return function(dispatch) {
    if (!helper.validateInputs(data)) {
      dispatch(updateStatus("All fields are required."));
    } else {
      dispatch(requestsSignup(data));
      setTimeout(() => {
        axios
          .post(`${urls.API_URL}/register`, data)
          .then(resp => dispatch(receiveSignup(resp.data.msg)))
          .catch(err => {
            receiveSignup(err.response.data.msg);
          });
      }, 2000);
    }
  };
};

const requestLogin = data => {
  return {
    type: types.REQUEST_LOGIN,
    data
  };
};

const receiveToken = token => {
  return {
    type: types.RECEIVE_TOKEN,
    token
  };
};

export const handleLogin = data => {
  return function(dispatch) {
    if (!helper.validateInputs(data)) {
      dispatch(updateStatus("All fields are required."));
    } else {
      dispatch(requestLogin(data));
      setTimeout(() => {
        axios
          .post(`${urls.API_URL}/login`, data)
          .then(resp => dispatch(receiveToken(resp.data.token)))
          .catch(err => {
            updateStatus(err.response.data.msg);
          });
      }, 2000);
    }
  };
};
