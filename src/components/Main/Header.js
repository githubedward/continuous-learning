import React from "react";
import BrandName from "../shared/BrandName";
import styled from "styled-components";
import * as styleGuides from "../shared/style-variables";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  height: 3.5rem;
  width: inherit;
  padding: 0.5rem 0;

  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 15px 1px ${styleGuides.gray};

  border-radius: 30px 30px 0 0;
`;

const StyledBrandName = styled.div`
  width: 100%;
  color: red;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// const IconBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Header = props => {
  return (
    <StyledHeader>
      <StyledBrandName>
        <BrandName size={"2rem"} color={styleGuides.superdarkgray} />
      </StyledBrandName>
    </StyledHeader>
  );
};

export default Header;
