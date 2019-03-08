import * as profileActions from "../../actions/profile/profile.types";

export default function profile(
  state = {
    editProfile: false
  },
  action
) {
  if (!action) return state;
  switch (action.type) {
    case profileActions.EDIT_PROFILE:
      return {
        ...state,
        editProfile: action.bool
      };
    default:
      return state;
  }
}
