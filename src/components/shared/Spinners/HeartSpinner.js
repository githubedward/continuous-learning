import React from "react";
import HeartSpinner from "react-spinners-kit";
import { connect } from "react-redux";

const SpinnerComponent = ({ isLoading }) => {
  return <HeartSpinner size={50} loading={isLoading} />;
};

const mapStateToProps = state => {
  const { isLoading } = state.auth;
  return {
    isLoading
  };
};

const Spinner = connect(mapStateToProps)(SpinnerComponent);

export default Spinner;
