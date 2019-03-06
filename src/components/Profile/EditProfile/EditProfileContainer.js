import React, { Component } from "react";
import EditProfile from "./EditProfile";
import { connect } from "react-redux";

class EditProfileContainer extends Component {
  render() {
    return <EditProfile />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer);
