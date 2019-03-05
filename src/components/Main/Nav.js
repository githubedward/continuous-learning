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

const Nav = () => {
  const iconSize = "2rem";
  const icons = ["place", "speaker_notes", "group", "person"];
  return (
    <StyledNav>
      {icons.map((name, i) => (
        <Icon
          key={i}
          icon={name}
          fontSize={iconSize}
          color={styleGuides.darkgray}
          hoverColor={styleGuides.lightred}
        />
      ))}
    </StyledNav>
  );
};

export default Nav;
