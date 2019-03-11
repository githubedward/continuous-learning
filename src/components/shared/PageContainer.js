import styled from "styled-components";
import * as styleGuides from "./style-variables";

const Container = styled.section`
  height: ${p => p.height || "inherit"};
  width: ${p => p.width || "inherit"};

  display: flex;
  flex-direction: ${p => p.flexDirection || "column"};
  justify-content: ${p => p.justifyContent || "center"};
  align-items: ${p => p.alignItems || "center"};

  padding: ${p => p.padding};

  animation: ${styleGuides.appear} 500ms ease-in;
  background-color: ${p => p.bgcolor};

  position: relative;
`;

export default Container;
