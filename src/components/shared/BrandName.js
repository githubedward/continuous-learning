import React from "react";
import styled from "styled-components";
import * as styledGuides from "./style-variables";
import Yellowtail from "../../themes/Assets/Yellowtail-Regular.ttf";

const StyledName = styled.h1`
  @font-face {
    font-family: "Yellowtail";
    src: url(${Yellowtail});
  }
  font-family: "Yellowtail";
  font-size: ${p => p.fontSize};
  font-weight: lighter;
  color: ${p => p.color};
`;

const BrandName = ({ size, color = styledGuides.superdarkgray }) => {
  return (
    <StyledName fontSize={size} color={color}>
      {process.env.REACT_APP_NAME}
    </StyledName>
  );
};

export default BrandName;
