import Profile from "./Profile";
import { connect } from "react-redux";
import { logout } from "../../state/actions/user/user.actions";
import { toggleEditProfile } from "../../state/actions/profile/profile.actions";

const mapStateToProps = state => {
  const { user } = state.user;
  const { profile } = state.profile;
  return {
    user,
    profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    toggleEditProfile: () => dispatch(toggleEditProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
