import React from "react";
import BrandName from "../shared/BrandName";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  width: inherit;
`;

const Header = props => {
  return (
    <StyledHeader>
      <i className="material-icons">person</i>
      <BrandName size={"2.5rem"} />
    </StyledHeader>
  );
};

export default Header;
