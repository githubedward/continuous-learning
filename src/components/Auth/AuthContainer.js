import { connect } from "react-redux";
import {
  handlePassword,
  handleUsername,
  handleFullName,
  handleSignup
} from "../../state/actions/actions.index";
import Auth from "./Auth";

const mapStateToProps = state => {
  const {
    fullname,
    username,
    password,
    isSignedUp,
    isLoggedIn,
    isLoading
  } = state.auth;
  return {
    username,
    password,
    fullname,
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
    handleSignup: input => dispatch(handleSignup(input))
  };
};

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthContainer;
