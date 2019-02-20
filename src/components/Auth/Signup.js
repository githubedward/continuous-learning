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
import Container from "../shared/Container";
import BrandName from "../shared/BrandName";

const Signup = ({
  handleUsername,
  handlePassword,
  handleFullName,
  fullname,
  username,
  password
}) => {
  return (
    <Container>
      <BrandName />
      <H1>
        <Span>
          <strong>Signup</strong> to find and share beautiful experiences
        </Span>
      </H1>
      <Form>
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
        <Button>Signup</Button>
      </Form>
      <Footer>
        Have an account? <Anchor>Login</Anchor>
      </Footer>
    </Container>
  );
};

Signup.propTypes = {
  handleUsername: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

Signup.defaultProps = {
  handleUsername: () => alert("default"),
  handlePassword: () => alert("default"),
  username: "default",
  password: "default"
};

export default Signup;
