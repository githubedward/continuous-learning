import { connect } from "react-redux";
import {
  handlePassword,
  handleUsername,
  handleFullName,
  handleSignup,
  updateStatus,
  linkLogin,
  linkSignup
} from "../../state/actions/auth.actions";
import Auth from "./Auth";

const mapStateToProps = state => {
  const {
    fullname,
    username,
    password,
    status,
    isSignedUp,
    isLoggedIn,
    isLoading
  } = state.auth;
  return {
    username,
    password,
    fullname,
    status,
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
    updateStatus: status => dispatch(updateStatus(status)),
    linkLogin: () => dispatch(linkLogin()),
    linkSignup: () => dispatch(linkSignup())
  };
};

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthContainer;
