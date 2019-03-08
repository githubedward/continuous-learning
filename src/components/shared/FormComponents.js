import React from "react";
import styled from "styled-components";
import * as styleGuides from "./style-variables";

export const Form = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${p => p.padding};
  margin: ${p => p.margin};
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: ${styleGuides.lighter};
  width: ${p => p.width || "inherit"};
  margin: 0.5rem;
`;

export const Input = styled.input`
  width: ${p => p.width || "inherit"};
  margin: 0.5rem;
  padding: 0 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: ${styleGuides.light};
  height: 3rem;
  border: 0;
  outline: 0;
  border-bottom: ${p => p.border};
  appearance: ${p => p.appearance};

  &:focus {
    outline: none;
    background-color: ${styleGuides.extralightgray};
    border-bottom: none;
  }

  ::placeholder {
    font-weight: ${styleGuides.lighter};
    color: ${styleGuides.darkgray};
    font-size: 1.25rem;
  }
`;

export const input = (text, name, placeholder, value, onChange) => {
  return (
    <Input
      type={text}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      border={`1px solid ${styleGuides.gray}`}
      appearance="none"
    />
  );
};
