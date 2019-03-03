import Profile from "./Profile";
import { connect } from "react-redux";
import { logout } from "../../state/actions/auth/auth.actions";

const mapStateToProps = state => {
  const { user } = state.main;
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
