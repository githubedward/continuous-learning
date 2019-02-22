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
  Anchor,
  Status
} from "./AuthStyles";
import PageContainer from "../shared/PageContainer";
import BrandName from "../shared/BrandName";
import * as styleGuides from "../shared/style-variables";

const Login = ({
  handleUsername,
  handlePassword,
  handleLogin,
  linkSignup,
  username,
  password,
  status
}) => {
  const data = {
    username,
    password
  };
  return (
    <PageContainer>
      <BrandName />
      <H1>
        <Span color={styleGuides.gray}>
          <Span fontWeight="bold">Login</Span> to find and share beautiful
          experiences
        </Span>
      </H1>
      <Form
        onSubmit={e => {
          e.preventDefault();
          handleLogin(data);
        }}
      >
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
        <Status>{status}</Status>
        <Button>Login</Button>
      </Form>
      <Footer>
        <Span color={styleGuides.darkgray} fontWeight="lighter">
          Don't have an account?
        </Span>{" "}
        <Anchor onClick={linkSignup}>Signup</Anchor>
      </Footer>
    </PageContainer>
  );
};

Login.propTypes = {
  handleUsername: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  linkSignup: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

Login.defaultProps = {
  handleUsername: () => alert("default"),
  handlePassword: () => alert("default"),
  linkSignup: () => alert("default"),
  username: "default",
  password: "default",
  status: "default"
};

export default Login;
