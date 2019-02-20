import styled from "styled-components";
import { appear } from "../shared/style-variables";

// styles
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 3rem;
  background: #ffffff95;
  border-radius: 3px;
  animation: ${appear} 500ms ease-in;
`;
export const Title = styled.h1`
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  margin: 0.5rem;
`;
export const Input = styled.input`
  padding: 0.2rem;
  font-size: 1.25rem;
`;
export const Button = styled.button`
  margin-top: 3rem;
  color: #ffffff;
  font-size: 1rem;
  width: 7.5rem;
  padding: 0.5rem 1rem;
  background: #fb720e;
  border: 1px solid #fb720e;
  border-radius: 3px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #fd8912;
    transition: 0.3s;
  }
`;
export const Span = styled.span`
  color: #fd8912;
`;
export const Error = styled.span`
  color: red;
  margin-top: 0.5rem;
  font-weight: 300;
`;
