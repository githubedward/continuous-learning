import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLowerSection = styled.div`
  width: 100%;

  text-align: left;
`;

const LowerSection = ({ user }) => {
  return (
    <StyledLowerSection>
      <h3>{user.fullname}</h3>
    </StyledLowerSection>
  );
};

LowerSection.propTypes = {
  user: PropTypes.object.isRequired
};

LowerSection.defaultProps = {
  user: {
    fullname: "test"
  }
};

export default LowerSection;
