import React from "react";
import Radium from "radium";
import styled from "styled-components";
import * as styleGuides from "../shared/style-variables";

const StyledIcon = styled.div`
  width: ${p => p.width};

  height: 100%;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.padding};
`;

const Icon = ({ icon, width, fontSize, padding }) => {
  return (
    <StyledIcon width={width} padding={padding}>
      <i
        className="material-icons"
        style={{
          color: styleGuides.darkgray,
          fontSize: fontSize,
          cursor: "pointer",

          ":hover": {
            color: styleGuides.lightred
          }
        }}
      >
        {icon}
      </i>
    </StyledIcon>
  );
};

export default Radium(Icon);
