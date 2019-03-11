import React from "react";
// import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Form, Input, Label, Span } from "../../../shared/FormComponents";
import Button from "../../../shared/Button";
import styled, { ThemeProvider } from "styled-components";
import * as styleGuides from "../../../shared/style-variables";
import validate from "./validate";

export const btnTheme = {
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

export const StyledButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  margin-top: 1rem;
  width: 100%;
`;

const FormBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  height: 5rem;
`;

const ErrorBlock = styled.div`
  text-align: center;
`;

// render input component
const renderField = ({
  input,
  label,
  type,
  placeholder,
  disabled,
  meta: { touched, error, warning },
  editProfilePhoto
}) => {
  return (
    <FormBlock>
      <Label disabled={disabled}>{label}</Label>
      <div>
        <Input
          disabled={disabled}
          width="100%"
          border={`1px solid ${styleGuides.lightgray}`}
          {...input}
          placeholder={placeholder}
          type={type}
        />
        {!editProfilePhoto ? (
          <ErrorBlock>
            {touched &&
              ((error && <Span color="red">{error}</Span>) ||
                (warning && <Span color="red">{warning}</Span>))}
          </ErrorBlock>
        ) : null}
      </div>
    </FormBlock>
  );
};

const EditProfileForm = props => {
  const { username, fullname } = props.user;
  const {
    editProfile,
    handleSubmit,
    pristine,
    submitting,
    changedAvatar
  } = props;
  const { editProfilePhoto } = props.profile;
  return (
    <Form onSubmit={handleSubmit} margin="1rem 0 0 0" padding="1rem">
      <Field
        disabled={editProfilePhoto}
        editProfilePhoto={editProfilePhoto}
        name="username"
        type="text"
        label="Username"
        placeholder={username}
        component={renderField}
      />
      <Field
        disabled={editProfilePhoto}
        editProfilePhoto={editProfilePhoto}
        name="fullname"
        type="text"
        label="Full Name"
        placeholder={fullname}
        component={renderField}
      />
      <StyledButtonsDiv>
        <ThemeProvider theme={btnTheme}>
          <Button
            type="submit"
            disabled={
              changedAvatar && !editProfilePhoto
                ? false
                : editProfilePhoto || (pristine || submitting)
            }
          >
            Save
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={btnTheme}>
          <Button
            type="button"
            disabled={submitting || editProfilePhoto}
            onClick={() => editProfile(false)}
          >
            Cancel
          </Button>
        </ThemeProvider>
      </StyledButtonsDiv>
    </Form>
  );
};

EditProfileForm.propTypes = {};

export default reduxForm({
  form: "editprofileform",
  validate
})(EditProfileForm);
