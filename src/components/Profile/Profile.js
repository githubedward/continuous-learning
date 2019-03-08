import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PageContainer from "../shared/PageContainer";

const Profile = props => {
  return (
    <PageContainer padding="1rem" justifyContent="baseline">
      <ProfileInfo {...props} />
    </PageContainer>
  );
};

export default Profile;
