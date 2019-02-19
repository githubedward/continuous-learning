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

const Signup = ({ handleUsername, handlePassword, username, password }) => {
  return (
    <Container>
      <Form>
        <Title>
          <Span>Signup</Span>
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
        <Button>Signup</Button>
      </Form>
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
  username: "",
  password: ""
};

export default Signup;
