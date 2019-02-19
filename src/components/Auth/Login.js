import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  Span
} from "./AuthStyles";

const Login = ({ handleUsername, handlePassword, username, password }) => {
  return (
    <Container>
      <Form>
        <Title>
          <Span>Login</Span>
        </Title>
        <Label>
          Username:
          <Input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </Label>
        <Button>Login</Button>
      </Form>
    </Container>
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
