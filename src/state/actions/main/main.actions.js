import * as types from "./main.types";
// import axios from "axios";

// const API_URL = process.env.REACT_APP_DEV_API_URL;

export const toggleLoader = bool => {
  return {
    type: types.TOGGLE_LOADER,
    bool
  };
};
