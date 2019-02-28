import React from "react";
import styled from "styled-components";
import Icon from "../shared/Icon";
import * as styleGuides from "../shared/style-variables";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: inherit;

  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 15px 1px ${styleGuides.gray};

  border-radius: 0 0 30px 30px;
  height: 4rem;
`;

const Nav = props => {
  const iconSize = "2rem";
  return (
    <StyledNav>
      <Icon icon="place" fontSize={iconSize} />
      <Icon icon="speaker_notes" fontSize={iconSize} />
      <Icon icon="people" fontSize={iconSize} />
      <Icon icon="person" fontSize={iconSize} />
    </StyledNav>
  );
};

export default Nav;
