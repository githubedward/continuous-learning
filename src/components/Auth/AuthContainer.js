import { connect } from "react-redux";
import { handlePassword, handleUsername } from "../../state/actions";
import Auth from "./Auth";

const mapStateToProps = state => {
  const { username, password, isSignedUp, isLoggedIn, isLoading } = state.auth;
  return {
    username,
    password,
    isSignedUp,
    isLoggedIn,
    isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: input => dispatch(handleUsername(input)),
    handlePassword: input => dispatch(handlePassword(input))
  };
};

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthContainer;
