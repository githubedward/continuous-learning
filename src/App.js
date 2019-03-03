import React, { Component } from "react";
// import GlobalStyle from "./themes/GlobalStyle";
import AuthContainer from "./components/Auth/AuthContainer";
import StyledApp from "./themes/StyledApp";
import Main from "./components/Main/Main";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./themes/index.css";
import PageLoader from "./components/shared/PageLoader";
import { validateToken, toggleLoader } from "./state/actions/main/main.actions";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token)
      setTimeout(() => {
        this.props.toggleLoader(false);
      }, 1500);
    else this.props.validateToken(token);
  }

  componentDidUpdate() {
    const token = localStorage.getItem("token");
    if (token && !this.props.user.fullname) this.props.validateToken(token);
    else if (this.props.isPageLoading)
      setTimeout(() => {
        this.props.toggleLoader(false);
      }, 1500);
  }

  // shouldComponentUpdate(nextProps) {
  //   if (this.props.user.fullname) return nextProps.user !== this.props.user;
  //   else return nextProps !== this.props;
  // }

  render() {
    const { isSignedUp, isLoggedIn, isPageLoading } = this.props;
    return (
      <StyledApp>
        {/* <GlobalStyle /> */}
        {isPageLoading ? (
          <PageLoader />
        ) : !isSignedUp || !isLoggedIn ? (
          <AuthContainer />
        ) : (
          <Main />
        )}
      </StyledApp>
    );
  }
}

const mapStateToProps = state => {
  const { isLoading: isAuthLoading, isLoggedIn, isSignedUp } = state.auth;
  const { isPageLoading, user } = state.main;

  return {
    isAuthLoading,
    isLoggedIn,
    isSignedUp,
    isPageLoading,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validateToken: token => dispatch(validateToken(token)),
    toggleLoader: bool => dispatch(toggleLoader(bool))
  };
};

App.propTypes = {
  isSignedUp: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAuthLoading: PropTypes.bool.isRequired,
  isPageLoading: PropTypes.bool.isRequired,
  validateToken: PropTypes.func.isRequired,
  toggleLoader: PropTypes.func.isRequired
};

App.defaultProps = {
  validateToken: () => alert("validateToken"),
  toggleLoader: () => alert("toggleLoader")
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
