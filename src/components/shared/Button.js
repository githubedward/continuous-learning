import styled from "styled-components";
import * as styleGuides from "./style-variables";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${p => p.theme.height || "auto"};
  font-weight: ${p => p.theme.fweight};
  margin: ${p => p.theme.margin};
  color: ${p => (p.disabled && styleGuides.lightgray) || p.theme.color};
  font-size: ${p => p.theme.fontSize};
  width: ${p => p.theme.width};
  height: ${p => p.theme.height};
  padding: ${p => p.theme.padding};
  background-color: ${p => p.theme.bgc};
  border: 1px solid
    ${p => (p.disabled && styleGuides.lightgray) || p.theme.borderColor};
  border-radius: 3px;
  text-decoration: none;
  cursor: ${p => (p.disabled && "not-allowed") || `pointer`};
  &:hover {
    background: ${p => (p.disabled && "none") || p.theme.hoverbgc};
    transition: 0.3s;
    border: 1px solid ${p => (p.disabled && "none") || p.theme.hoverbc};
    color: ${p => (p.disabled && "none") || p.theme.hovercolor};
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${p => p.theme.bgc};
    border: 1px solid ${p => p.theme.borderColor};
    color: ${p => p.theme.color};
  }
`;

export default Button;
