import * as types from "../../actions/main/main.types";

export default function main(
  state = {
    isPageLoading: true,
    user: {}
  },
  action
) {
  if (!action) return state;
  switch (action.type) {
    case types.TOGGLE_LOADER:
      return {
        ...state,
        isPageLoading: action.bool
      };
    default:
      return state;
  }
}
