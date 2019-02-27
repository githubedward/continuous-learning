import React from "react";
import BrandName from "../shared/BrandName";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  width: inherit;
`;

const StyledIcon = styled.i``;

const StyledBrandName = styled(BrandName)`
  width: 3vw;
  color: red;
`;

const Header = props => {
  return (
    <StyledHeader>
      <i className="material-icons">person</i>
      <StyledBrandName className={props.className} size={"2.5rem"} />
    </StyledHeader>
  );
};

export default Header;
