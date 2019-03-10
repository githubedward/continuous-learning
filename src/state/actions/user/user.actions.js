import * as types from "./user.types";
import axios from "axios";
import * as helper from "../../../helpers/functions";
import { toggleLoader } from "../main/main.actions";

const API_URL = process.env.REACT_APP_DEV_API_URL;

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

export const requestsSignup = data => {
  return {
    type: types.REQUEST_SIGNUP,
    data
  };
};

export const receiveSignup = result => {
  return {
    type: types.RECEIVE_SIGNUP,
    result
  };
};

export const handleSignup = data => {
  return async dispatch => {
    if (!helper.validateInputs(data)) {
      dispatch(updateStatus("All fields are required."));
    } else {
      dispatch(requestsSignup(data));
      await helper.delay(1000);
      try {
        const resp = await axios.post(`${API_URL}/register`, data);
        dispatch(receiveSignup(resp.data.msg));
      } catch (err) {
        dispatch(updateStatus(err.response.data.msg));
      }

      // helper.delay(1000).then(() => {
      //   axios
      //     .post(`${API_URL}/register`, data)
      //     .then(resp => dispatch(receiveSignup(resp.data.msg)))
      //     .catch(err => dispatch(updateStatus(err.response.data.msg)));
      // });
    }
  };
};

export const requestLogin = data => {
  return {
    type: types.REQUEST_LOGIN,
    data
  };
};

export const receiveToken = token => {
  return {
    type: types.RECEIVE_TOKEN,
    token
  };
};

export const handleLogin = data => {
  return async dispatch => {
    if (!helper.validateInputs(data)) {
      dispatch(updateStatus("All fields are required."));
    } else {
      dispatch(requestLogin(data));
      await helper.delay(1000);
      try {
        const resp = await axios.post(`${API_URL}/login`, data);
        dispatch(receiveToken(resp.data.token));
        localStorage.setItem("token", resp.data.token);
        dispatch(toggleLoader(true));
      } catch (err) {
        dispatch(updateStatus(err.response.data.msg));
      }

      // dispatch(requestLogin(data));
      // helper.delay(1000).then(() => {
      //   axios
      //     .post(`${API_URL}/login`, data)
      //     .then(resp => {
      //       dispatch(receiveToken(resp.data.token));
      //       localStorage.setItem("token", resp.data.token);
      //       dispatch(toggleLoader(true));
      //     })
      //     .catch(err => dispatch(updateStatus(err.response.data.msg)));
      // });
    }
  };
};

export const authenticated = user => {
  return {
    type: types.AUTHENTICATED,
    user
  };
};

export const validateToken = token => {
  return async dispatch => {
    const init = {
      headers: {
        authorization: `Bearer ${token}`
      }
    };
    await helper.delay(100);
    try {
      const resp = await axios.get(`${API_URL}/user`, init);
      dispatch(authenticated(resp.data));
      dispatch(toggleLoader(false));
    } catch (err) {
      dispatch(toggleLoader(false));
    }

    // setTimeout(() => {
    //   axios
    //     .get(`${API_URL}/user`, init)
    //     .then(resp => {
    //       dispatch(authenticated(resp.data));
    //       dispatch(toggleLoader(false));
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       dispatch(toggleLoader(false));
    //     });
    // }, 100);
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: types.LOGOUT
  };
};

export const updateUser = data => {
  return {
    type: types.UPDATE_USER,
    data
  };
};
