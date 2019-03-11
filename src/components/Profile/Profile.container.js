import React, { Component } from "react";
import Profile from "./Profile";
import EditProfile from "./EditProfile/EditProfile";
import { connect } from "react-redux";
import {
  logout,
  uploadAvatar,
  removeAvatar
} from "../../state/actions/user/user.actions";
import {
  editProfile,
  saveProfileChanges,
  editProfilePhoto
} from "../../state/actions/profile/profile.actions";

class ProfileContainer extends Component {
  render() {
    const { props } = this;
    // return <EditProfile {...props} />;
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
    editProfile: bool => dispatch(editProfile(bool)),
    editProfilePhoto: bool => dispatch(editProfilePhoto(bool)),
    saveProfileChanges: data => dispatch(saveProfileChanges(data)),
    uploadAvatar: url => dispatch(uploadAvatar(url)),
    removeAvatar: () => dispatch(removeAvatar())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
