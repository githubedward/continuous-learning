import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

const EditProfileForm = ({ user }) => {
  const { username, fullname } = user;
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label>
        Username
        <Field
          name="username"
          type="text"
          placeholder={username}
          component="input"
        />
      </label>
      <label>
        Full name
        <Field
          name="fullname"
          type="text"
          placeholder={fullname}
          component="input"
        />
      </label>
    </form>
  );
};

EditProfileForm.propTypes = {};

export default reduxForm({
  form: "editprofileform"
})(EditProfileForm);
