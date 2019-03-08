import React from "react";
import PropTypes from "prop-types";
import PageContainer from "../../shared/PageContainer";
import BrandName from "../../shared/BrandName";
import * as styleGuides from "../../shared/style-variables";
import { MagicSpinner } from "react-spinners-kit";
import { H1, Span, Footer, Status } from "../AuthStyles";
import Anchor from "../../shared/Anchor";
import Button from "../../shared/Button";
import { Form, Input, input } from "../../shared/FormComponents";
import { ThemeProvider } from "styled-components";
import { btnTheme } from "../AuthStyles";

const Signup = ({
  handleUsername,
  handlePassword,
  handleFullName,
  handleSignup,
  isLoading,
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
      <BrandName size={"3.5rem"} />
      <H1>
        <Span color={styleGuides.gray}>
          <Span fontWeight="bold" color={styleGuides.gray}>
            Signup
          </Span>{" "}
          to find and share beautiful experiences
        </Span>
      </H1>
      <Form
        onSubmit={e => {
          e.preventDefault();
          handleSignup(userInfo);
        }}
        padding="2rem 2.5rem"
      >
        {input("text", "fullname", "Full Name", fullname, e => {
          handleFullName(e.target.value);
        })}
        {input("text", "username", "Username", username, e => {
          handleUsername(e.target.value);
        })}
        {input("password", "password", "Password", password, e => {
          handlePassword(e.target.value);
        })}
        <Status>{status}</Status>
        <ThemeProvider theme={btnTheme}>
          <Button>
            {isLoading ? (
              <MagicSpinner loading={isLoading} size={25} color={"white"} />
            ) : (
              "Signup"
            )}
          </Button>
        </ThemeProvider>
      </Form>
      <Footer>
        <Span fontWeight={styleGuides.light}>Have an account?</Span>{" "}
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
