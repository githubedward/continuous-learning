import React from "react";
import { connect } from "react-redux";
import {
  handlePassword,
  handleUsername,
  handleFullName,
  handleSignup,
  handleLogin,
  updateStatus,
  linkLogin,
  linkSignup
} from "../../state/actions/auth.actions";
import Signup from "./Signup";
import Login from "./Login";

const mapStateToProps = state => {
  const {
    fullname,
    username,
    password,
    status,
    token,
    isSignedUp,
    isLoggedIn,
    isLoading
  } = state.auth;
  return {
    username,
    password,
    fullname,
    status,
    token,
    isSignedUp,
    isLoggedIn,
    isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: input => dispatch(handleUsername(input)),
    handlePassword: input => dispatch(handlePassword(input)),
    handleFullName: input => dispatch(handleFullName(input)),
    handleSignup: input => dispatch(handleSignup(input)),
    handleLogin: input => dispatch(handleLogin(input)),
    updateStatus: status => dispatch(updateStatus(status)),
    linkLogin: () => dispatch(linkLogin()),
    linkSignup: () => dispatch(linkSignup())
  };
};

const Auth = props => {
  return !props.isSignedUp ? <Signup {...props} /> : <Login {...props} />;
};

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthContainer;
