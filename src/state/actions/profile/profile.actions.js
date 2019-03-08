import * as types from "./profile.types";
import { updateUser } from "../../actions/user/user.actions";
import { toggleLoader } from "../../actions/main/main.actions";
import { validateInputs } from "../../../helpers/functions";

export const toggleEditProfile = bool => {
  return {
    type: types.EDIT_PROFILE,
    bool
  };
};

// export const saveProfileChanges = data => {
//   return dispatch => {
//     if (!helper.validateInputs(data))
//   };
// };
