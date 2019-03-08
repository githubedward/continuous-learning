import * as types from "./profile.types";

export const toggleEditProfile = bool => {
  return {
    type: types.EDIT_PROFILE,
    bool
  };
};
