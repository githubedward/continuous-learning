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
  color: ${styledGuides.superdarkgray};
`;

const BrandName = ({ size }) => {
  return <StyledName fontSize={size}>MapSocial</StyledName>;
};

export default BrandName;
