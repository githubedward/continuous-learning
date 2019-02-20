import React from "react";
import styled from "styled-components";
import * as styledGuides from "./style-variables";

const StyledName = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Yellowtail");
  font-family: "Yellowtail", cursive;
  font-size: 4rem;
  font-weight: lighter;
  color: ${styledGuides.superdarkgray};
`;

export default function BrandName() {
  return <StyledName>MapSocial</StyledName>;
}
