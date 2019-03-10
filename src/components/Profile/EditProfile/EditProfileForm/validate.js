const validate = values => {
  const errors = {};
  // simple validation
  if (!values.username) errors.username = "Username is unchanged";
  if (!values.fullname) errors.fullname = "Full Name is unchanged";
  return errors;
};

export default validate;
