import styled from "styled-components";
import * as styleGuides from "./style-variables";

const Container = styled.section`
  height: inherit;
  width: inherit;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${styleGuides.appear} 500ms ease-in;
`;

export default Container;
