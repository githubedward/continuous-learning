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

const Signup = ({
  handleUsername,
  handlePassword,
  handleFullName,
  handleSignup,
  updateStatus,
  linkLogin,
  fullname,
  username,
  password,
  status
}) => {
  const userInfo = {
    fullname,
    username,
    password
  };
  return (
    <PageContainer>
      <BrandName />
      <H1>
        <Span color={styleGuides.gray}>
          <strong>Signup</strong> to find and share beautiful experiences
        </Span>
      </H1>
      <Form
        onSubmit={e => {
          e.preventDefault();
          handleSignup(userInfo);
        }}
      >
        <Label>
          <Input
            type="text"
            name="full-name"
            placeholder="Full Name"
            value={fullname}
            onChange={e => {
              handleFullName(e.target.value);
            }}
          />
        </Label>
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
        <Button>Signup</Button>
      </Form>
      <Footer>
        <Span fontWeight="lighter">Have an account?</Span>{" "}
        <Anchor onClick={linkLogin}>Login</Anchor>
      </Footer>
    </PageContainer>
  );
};

Signup.propTypes = {
  handleUsername: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleFullName: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  fullname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

Signup.defaultProps = {
  handleUsername: () => alert("default"),
  handlePassword: () => alert("default"),
  handleFullName: () => alert("default"),
  handleSignup: () => alert("default"),
  updateStatus: () => alert("default"),
  fullname: "default",
  username: "default",
  password: "default",
  status: "default"
};

export default Signup;
