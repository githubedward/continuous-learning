import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${p => p.theme.height || "auto"};
  font-weight: ${p => p.theme.fweight};
  margin: ${p => p.theme.margin};
  color: ${p => p.theme.color};
  font-size: ${p => p.theme.fontSize};
  width: ${p => p.theme.width};
  height: ${p => p.theme.height};
  padding: ${p => p.theme.padding};
  background-color: ${p => p.theme.bgc};
  border: 1px solid ${p => p.theme.borderColor};
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: ${p => p.theme.hoverbgc};
    transition: 0.3s;
    border: 1px solid ${p => p.theme.hoverbc};
    color: ${p => p.theme.hovercolor};
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
