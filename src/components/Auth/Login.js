import React from "react";
import PropTypes from "prop-types";
import {
  H1,
  Form,
  Label,
  Input,
  Button,
  Span,
  Footer,
  Anchor
} from "./AuthStyles";
import PageContainer from "../shared/PageContainer";
import BrandName from "../shared/BrandName";

const Login = ({ handleUsername, handlePassword, username, password }) => {
  return (
    <PageContainer>
      <BrandName />
      <H1>
        <Span>
          <strong>Login</strong> to find and share beautiful experiences
        </Span>
      </H1>
      <Form onSubmit={e => e.preventDefault()}>
        <Label>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => {
              handleUsername(e.target.value);
            }}
          />
        </Label>
        <Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => {
              handlePassword(e.target.value);
            }}
          />
        </Label>
        <Button>Signup</Button>
      </Form>
      <Footer>
        Don't have an account? <Anchor>Signup</Anchor>
      </Footer>
    </PageContainer>
  );
};

Login.propTypes = {
  handleUsername: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

Login.defaultProps = {
  handleUsername: () => alert("default"),
  handlePassword: () => alert("default"),
  username: "default",
  password: "default"
};

export default Login;
