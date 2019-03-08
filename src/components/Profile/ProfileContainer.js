import React, { Component } from "react";
import Profile from "./Profile";
import EditProfile from "./EditProfile/EditProfile";
import { connect } from "react-redux";
import { logout } from "../../state/actions/user/user.actions";
import { toggleEditProfile } from "../../state/actions/profile/profile.actions";

class ProfileContainer extends Component {
  render() {
    const { props } = this;
    return !props.profile.editProfile ? (
      <Profile {...props} />
    ) : (
      <EditProfile {...props} />
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.user;
  const { profile } = state;
  return {
    user,
    profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    toggleEditProfile: bool => dispatch(toggleEditProfile(bool))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
