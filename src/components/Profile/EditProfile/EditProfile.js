import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as styleGuides from "../../shared/style-variables";
import Icon from "../../shared/Icon";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
`;

const StyledProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px ${styleGuides.lightred} solid;
  border-radius: 50%;
  background-color: ${styleGuides.lightred};
  padding: 1rem 0;
  width: 30%;
`;

const EditProfile = props => {
  return (
    <StyledContainer>
      <StyledProfilePhoto>
        <Icon icon="person" fontSize="5rem" color="white" />
      </StyledProfilePhoto>
    </StyledContainer>
  );
};

EditProfile.propTypes = {};

export default EditProfile;
