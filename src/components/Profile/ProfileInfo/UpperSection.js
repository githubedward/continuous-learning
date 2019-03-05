import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../../shared/Icon";
import InfoBlocks from "./UpperSection.InfoBlocks";
import ProfileButtons from "./UpperSection.ProfileButtons";

import * as styleGuides from "../../shared/style-variables";

const StyledUpperSection = styled.section`
  display: flex;
  align-items: center;
  width: inherit;

  margin-bottom: 1rem;
`;

const StyledLeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px ${styleGuides.lightred} solid;
  border-radius: 50%;
  background-color: ${styleGuides.lightred};
  padding: 0.6rem 0;
  width: 30%;
`;

const StyledRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
  width: 70%;
`;

const UpperSection = props => {
  return (
    <StyledUpperSection>
      <StyledLeftDiv>
        <Icon icon="person" fontSize="5rem" color="white" />
      </StyledLeftDiv>
      <StyledRightDiv>
        <InfoBlocks />
        <ProfileButtons {...props} />
      </StyledRightDiv>
    </StyledUpperSection>
  );
};

UpperSection.propTypes = {};

export default UpperSection;
