import * as types from "./types";
import axios from "axios";
import * as urls from "../../helpers/url";

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

const requestsSignup = data => {
  return {
    type: types.REQUEST_SIGNUP,
    data
  };
};

const receiveSignup = data => {
  return {
    type: types.RECEIVE_SIGNUP,
    data
  };
};

export const handleSignup = data => {
  return dispatch => {
    dispatch(requestsSignup(data));
    return axios
      .post(`${urls.API_URL}/register`, data)
      .then(resp =>
        dispatch(receiveSignup(resp.data.msg), err =>
          receiveSignup(err.response.data.msg)
        )
      );
  };
};
