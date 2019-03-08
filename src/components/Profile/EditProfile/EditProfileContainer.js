import React, { Component } from "react";
import EditProfile from "./EditProfile";
import { connect } from "react-redux";

// class EditProfileContainer extends Component {
//   render() {
//     return <EditProfile {...props} />;
//   }
// }

const mapStateToProps = state => {
  const { user } = state.user;
  return { user };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
