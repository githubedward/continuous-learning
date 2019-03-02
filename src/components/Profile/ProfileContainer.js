import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const { user } = state.main;
  return {
    user
  };
};

export default connect(mapStateToProps)(Profile);
