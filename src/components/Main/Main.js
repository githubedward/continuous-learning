import React from "react";
import Header from "./Header";
import Display from "./Display";
import Nav from "./Nav";
import styled from "styled-components";
import * as styleGuides from "../shared/style-variables";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  animation: ${styleGuides.appear} 500ms ease-in;

  height: inherit;
  width: inherit;
`;

export default function Main() {
  return (
    <StyledMain>
      <Header />
      <Display />
      <Nav />
    </StyledMain>
  );
}
