import * as types from "./main.types";
import axios from "axios";
import { authenticated } from "../auth/auth.actions";

const API_URL = process.env.REACT_APP_DEV_API_URL;

export const toggleLoader = bool => {
  return {
    type: types.TOGGLE_LOADER,
    bool
  };
};

const validatedUser = user => {
  return {
    type: types.VALIDATED_USER,
    user
  };
};

export const validateToken = token => {
  return function(dispatch) {
    const init = {
      headers: {
        authorization: `Bearer ${token}`
      }
    };
    setTimeout(() => {
      axios
        .get(`${API_URL}/profile`, init)
        .then(resp => {
          dispatch(authenticated());
          dispatch(validatedUser(resp.data));
        })
        .catch(err => {
          console.log(err);
          dispatch(toggleLoader(false));
        });
    }, 2000);
  };
};
