import { connect } from "react-redux";
import { handlePassword, handleUsername } from "../../state/actions/index";
import Signup from "./Signup";

const mapStateToProps = state => {
  return {
    username: state.authInput.username,
    password: state.authInput.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: input => dispatch(handleUsername(input)),
    handlePassword: input => dispatch(handlePassword(input))
  };
};

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

export default SignupContainer;
