import styled from "styled-components";

// styles
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #41304d;
`;
export const Title = styled.h1`
  margin-bottom: 1rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 3rem;
  background: #ffffff95;
  box-shadow: 0px 0px 5px 2px rgba(209, 209, 209, 0.3);
  border-radius: 3px;
  animation: transition-opacity 500ms ease-in;
  @keyframes transition-opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  box-shadow: 0px 0px 5px 1px rgba(209, 209, 209, 0.3);
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
