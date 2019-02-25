import React from "react";
import PropTypes from "prop-types";
import PageContainer from "../../shared/PageContainer";
import BrandName from "../../shared/BrandName";
import * as styleGuides from "../../shared/style-variables";
// import HeartSpinner from "../shared/Spinners/HeartSpinner";
import { MagicSpinner } from "react-spinners-kit";
import {
  H1,
  Form,
  Input,
  Button,
  Span,
  Footer,
  Anchor,
  Status
} from "../AuthStyles";

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
          <Span fontWeight="bold">Signup</Span> to find and share beautiful
          experiences
        </Span>
      </H1>
      <Form
        onSubmit={e => {
          e.preventDefault();
          handleSignup(userInfo);
        }}
      >
        <Input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={fullname}
          onChange={e => {
            handleFullName(e.target.value);
          }}
        />
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
        <Button>
          {isLoading ? (
            <MagicSpinner loading={isLoading} size={35} color={"white"} />
          ) : (
            "Signup"
          )}
        </Button>
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
