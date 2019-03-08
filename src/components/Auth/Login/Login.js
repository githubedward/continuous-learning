import React from "react";
import PropTypes from "prop-types";
import { H1, Form, Input, Span, Footer, Status } from "../AuthStyles";
import Anchor from "../../shared/Anchor";
import PageContainer from "../../shared/PageContainer";
import BrandName from "../../shared/BrandName";
import * as styleGuides from "../../shared/style-variables";
import { MagicSpinner } from "react-spinners-kit";
import Button from "../../shared/Button";
import { ThemeProvider } from "styled-components";
import { btnTheme } from "../AuthStyles";

const Login = ({
  handleUsername,
  handlePassword,
  handleLogin,
  linkSignup,
  isLoading,
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
      <BrandName size={"3.5rem"} />
      <H1>
        <Span color={styleGuides.gray}>
          <Span fontWeight="bold" color={styleGuides.gray}>
            Login
          </Span>{" "}
          to find and share beautiful experiences
        </Span>
      </H1>
      <Form
        onSubmit={e => {
          e.preventDefault();
          handleLogin(data);
        }}
      >
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={e => {
            handleUsername(e.target.value);
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => {
            handlePassword(e.target.value);
          }}
        />
        <Status>{status}</Status>
        <ThemeProvider theme={btnTheme}>
          <Button>
            {isLoading ? (
              <MagicSpinner loading={isLoading} size={25} color={"white"} />
            ) : (
              "Login"
            )}
          </Button>
        </ThemeProvider>
      </Form>
      <Footer>
        <Span color={styleGuides.darkgray} fontWeight={styleGuides.lighter}>
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
