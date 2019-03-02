import React from "react";
import styled from "styled-components";
import * as styleGuides from "./style-variables";
import { FlapperSpinner } from "react-spinners-kit";

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: inherit;
  height: inherit;
`;

const H2 = styled.h2`
  color: ${styleGuides.lightred};
  margin-top: 2rem;
  font-weight: 300;
`;

const PageLoader = () => {
  return (
    <StyledLoader>
      <FlapperSpinner color="red" size={35} loading={true} />
      <H2>loading</H2>
    </StyledLoader>
  );
};

export default PageLoader;
