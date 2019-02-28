import React, { Component } from "react";
// import GlobalStyle from "./themes/GlobalStyle";
import AuthContainer from "./components/Auth/AuthContainer";
import StyledApp from "./themes/StyledApp";
import Main from "./components/Main/Main";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./themes/index.css";

class App extends Component {
  render() {
    const { isSignedUp, isLoggedIn } = this.props;
    return (
      <StyledApp>
        {/* <GlobalStyle /> */}
        {!isSignedUp || !isLoggedIn ? <AuthContainer /> : <Main />}
      </StyledApp>
    );
  }
}

App.propTypes = {
  isSignedUp: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAuthLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { isLoading: isAuthLoading, isLoggedIn, isSignedUp } = state.auth;

  return {
    isAuthLoading,
    isLoggedIn,
    isSignedUp
  };
};

export default connect(mapStateToProps)(App);
