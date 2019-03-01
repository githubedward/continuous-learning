import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Icon from "../shared/Icon";
import PropTypes from "prop-types";
import Button from "../shared/Button";
import * as styleGuides from "../shared/style-variables";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = ({ fullname }) => {
  const btnTheme = {
    margin: "1rem 0 0 0",
    color: styleGuides.darkgray,
    fontSize: "1rem",
    width: "inherit",
    padding: ".5rem 1rem",
    bgc: "white",
    borderColor: styleGuides.gray,
    hoverbgc: styleGuides.lightgray,
    fweight: styleGuides.light
  };

  return (
    <StyledProfile>
      <Icon icon="person" />
      <h2>{fullname}</h2>
      <ThemeProvider theme={btnTheme}>
        <Button>Edit</Button>
      </ThemeProvider>
    </StyledProfile>
  );
};

Profile.propTypes = {
  fullname: PropTypes.string.isRequired
};

Profile.defaultProps = {
  fullname: "default"
};

export default Profile;
