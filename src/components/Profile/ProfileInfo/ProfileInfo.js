import React from "react";
import LowerSection from "./LowerSection";
import UpperSection from "./UpperSection";
import styled from "styled-components";

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProfileInfo = props => {
  return (
    <StyledProfileInfo>
      <UpperSection {...props} />
      <LowerSection {...props} />
    </StyledProfileInfo>
  );
};

export default ProfileInfo;
