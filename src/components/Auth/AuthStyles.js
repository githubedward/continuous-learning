import styled from "styled-components";
import * as styleGuides from "../shared/style-variables";

// styles
export const Form = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2.5rem;
  background: #ffffff95;
  border-radius: 3px;
  animation: ${styleGuides.appear} 500ms ease-in;
`;
export const H1 = styled.h1`
  margin: 1rem 0;
  text-align: center;
  font-weight: normal;
  padding: 0rem 2rem;
`;
export const Label = styled.label`
  width: inherit;
  margin: 0.5rem;
`;
export const Input = styled.input`
  width: inherit;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  font-weight: ${styleGuides.light};
  height: 3rem;

  &:focus {
    outline: none;
    background-color: ${styleGuides.lightgray};
  }

  ::placeholder {
    font-weight: ${styleGuides.lighter};
    color: ${styleGuides.darkgray};
  }
`;
export const Span = styled.span`
  font-weight: ${p => p.fontWeight};
  color: ${p => p.color};
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
export const Anchor = styled.a`
  color: ${styleGuides.blue};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
