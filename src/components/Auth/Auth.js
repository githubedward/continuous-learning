import React from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = props => {
  if (!props.isSignedUp) return <Signup {...props} />;
  else if (props.isSignedUp && !props.isLoggedIn) return <Login {...props} />;
};

export default Auth;
