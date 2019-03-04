import Profile from "./Profile";
import { connect } from "react-redux";
import { logout } from "../../state/actions/user/user.actions";

const mapStateToProps = state => {
  const { user } = state.user;
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
