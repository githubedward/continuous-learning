import styled from "styled-components";
import * as styleGuides from "../shared/style-variables";

const Anchor = styled.a`
  color: ${styleGuides.blue};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Anchor;
