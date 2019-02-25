import React from "react";
import Header from "./Header";
import Display from "./Display";
import Nav from "./Nav";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

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
