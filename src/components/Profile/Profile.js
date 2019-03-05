import React from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import * as styleGuides from "../shared/style-variables";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Profile = props => {
  return (
    <StyledProfile>
      <ProfileInfo {...props} />
    </StyledProfile>
  );
};

export default Profile;
