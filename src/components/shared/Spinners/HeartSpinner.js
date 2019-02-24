import React from "react";
import { HeartSpinner } from "react-spinners-kit";
import styled from "styled-components";
import { connect } from "react-redux";

const Spinner = styled.HeartSpinner`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerComponent = ({ loading }) => {
  return <Spinner size={50} loading={loading} />;
};

// const mapStateToProps = state => {
//   const { isLoading } = state.auth;
//   return {
//     isLoading
//   };
// };

// const Spinner = connect(mapStateToProps)(SpinnerComponent);

export default SpinnerComponent;
