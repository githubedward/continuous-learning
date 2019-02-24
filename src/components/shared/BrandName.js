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
  font-size: 4rem;
  font-weight: lighter;
  color: ${styledGuides.superdarkgray};
`;

export default function BrandName() {
  return <StyledName>MapSocial</StyledName>;
}
