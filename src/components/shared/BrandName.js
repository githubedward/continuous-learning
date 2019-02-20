import React from "react";
import styled from "styled-components";

const StyledName = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Yellowtail");
  font-family: "Yellowtail", cursive;
  font-size: 4rem;
  font-weight: lighter;
`;

export default function BrandName() {
  return <StyledName>Pinn't</StyledName>;
}
