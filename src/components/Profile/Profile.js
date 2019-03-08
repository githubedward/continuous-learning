import React from "react";
import PageContainer from "../shared/PageContainer";
import LowerSection from "./ProfileInfo/LowerSection";
import UpperSection from "./ProfileInfo/UpperSection";
// import styled from "styled-components";

const Profile = props => {
  return (
    <PageContainer padding="1rem" justifyContent="baseline">
      <UpperSection {...props} />
      <LowerSection {...props} />
    </PageContainer>
  );
};

export default Profile;
