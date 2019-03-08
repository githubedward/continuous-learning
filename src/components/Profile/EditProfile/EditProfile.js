import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as styleGuides from "../../shared/style-variables";
import Icon from "../../shared/Icon";
import Anchor from "../../shared/Anchor";
import EditProfileForm from "./EditProfileForm";
import PageContainer from "../../shared/PageContainer";

const StyledProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px ${styleGuides.lightred} solid;
  border-radius: 50%;
  background-color: ${styleGuides.lightred};
  padding: 1rem 0;
  width: 30%;
  margin: 0 0 1rem 0;
`;

const EditProfile = props => {
  return (
    <PageContainer>
      <StyledProfilePhoto>
        <Icon icon="person" fontSize="5rem" color="white" />
      </StyledProfilePhoto>
      <Anchor>Edit</Anchor>
      <EditProfileForm {...props} />
    </PageContainer>
  );
};

EditProfile.propTypes = {};

export default EditProfile;
