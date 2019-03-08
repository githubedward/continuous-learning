import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Form, Input, Label } from "../../shared/FormComponents";
import Button from "../../shared/Button";
import styled, { ThemeProvider } from "styled-components";
import * as styleGuides from "../../shared/style-variables";

const btnTheme = {
  margin: "1rem .5rem 0 .5rem",
  color: styleGuides.darkgray,
  fontSize: ".8rem",
  padding: "0rem 1rem",
  bgc: "white",
  borderColor: styleGuides.gray,
  hoverbgc: styleGuides.lightred,
  fweight: styleGuides.light,
  height: "1.75rem",
  hoverbc: styleGuides.lightred,
  hovercolor: "white"
};

const StyledButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const EditProfileForm = props => {
  const { username, fullname } = props.user;
  const { toggleEditProfile, saveProfileChanges, pristine, submitting } = props;
  const input = placeholder => {
    return (
      <Input
        width="65%"
        placeholder={placeholder}
        border={`1px solid ${styleGuides.lightgray}`}
        appearance="none"
      />
    );
  };

  console.log(props);
  return (
    <Form onSubmit={e => e.preventDefault()} margin="1rem 0 0 0" padding="1rem">
      <Label>
        Username
        <Field name="username" type="text" component={() => input(username)} />
      </Label>
      <Label>
        Full Name
        <Field name="fullname" type="text" component={() => input(fullname)} />
      </Label>
      <StyledButtonsDiv>
        <ThemeProvider theme={btnTheme}>
          <Button
            onClick={saveProfileChanges}
            disabled={pristine || submitting}
          >
            Save
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={btnTheme}>
          <Button onClick={() => toggleEditProfile(false)}>Cancel</Button>
        </ThemeProvider>
      </StyledButtonsDiv>
    </Form>
  );
};

EditProfileForm.propTypes = {};

export default reduxForm({
  form: "editprofileform"
})(EditProfileForm);
