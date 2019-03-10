import * as profileTypes from "../../actions/profile/profile.types";

export default function profile(
  state = {
    editProfile: false,
    editProfilePhoto: false
  },
  action
) {
  if (!action) return state;
  switch (action.type) {
    case profileTypes.EDIT_PROFILE:
      return {
        ...state,
        editProfile: action.bool
      };
    case profileTypes.EDIT_PROFILE_PHOTO:
      return {
        ...state,
        editProfilePhoto: action.bool
      };
    default:
      return state;
  }
}
