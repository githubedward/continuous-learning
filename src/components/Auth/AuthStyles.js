import styled from "styled-components";
import * as styleGuides from "../shared/style-variables";

// styles

export const H1 = styled.h1`
  margin: 1rem 0;
  text-align: center;
  font-weight: normal;
  padding: 0rem 2rem;
`;
export const Status = styled.span`
  color: red;
  margin-top: 1rem;
  font-weight: 300;
`;
export const Footer = styled.footer`
  margin-top: 3rem;
  color: ${styleGuides.superdarkgray};
  font-size: 1rem;
`;
export const btnTheme = {
  margin: "3rem 0 0 0",
  color: "white",
  fontSize: "1.5rem",
  fweight: styleGuides.medium,
  width: "inherit",
  height: "3rem",
  padding: ".5rem 1rem",
  bgc: styleGuides.lightred,
  borderColor: styleGuides.lightred,
  hoverbgc: styleGuides.red
};
