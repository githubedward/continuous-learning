import React from "react";
import PropTypes from "prop-types";
import { Title, Form, Label, Input, Button, Span } from "./AuthStyles";

const Signup = ({ handleUsername, handlePassword, username, password }) => {
  return (
    <Form>
      <Title>
        <Span>Signup, it's Free!</Span>
      </Title>
      <Label>
        Username:
        <Input
          type="text"
          name="username"
          value={username}
          onChange={e => {
            handleUsername(e.target.value);
          }}
        />
      </Label>
      <Label>
        Password:
        <Input
          type="password"
          name="password"
          value={password}
          onChange={e => {
            handlePassword(e.target.value);
          }}
        />
      </Label>
      <Button>Signup</Button>
    </Form>
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