import * as types from "./profile.types";
import { authenticated } from "../../actions/user/user.actions";
import { toggleLoader } from "../../actions/main/main.actions";
import * as helper from "../../../helpers/functions";
import axios from "axios";

const API_URL = process.env.REACT_APP_DEV_API_URL;

export const editProfile = bool => {
  return {
    type: types.EDIT_PROFILE,
    bool
  };
};

export const editProfilePhoto = bool => {
  return {
    type: types.EDIT_PROFILE_PHOTO,
    bool
  };
};

export const saveProfileChanges = data => {
  return async (dispatch, getState) => {
    dispatch(toggleLoader(true));
    const user = { ...getState().user.user };
    const newUser = {
      oldUsername: user.username,
      ...data
    };
    alert(JSON.stringify(newUser));
    await helper.delay(500);
    const resp = await axios.post(`${API_URL}/update-user`, newUser);
    dispatch(authenticated(resp.data));
    dispatch(editProfile(false));
    dispatch(toggleLoader(false));
  };
};
