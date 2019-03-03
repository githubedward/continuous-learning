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

const Profile = ({ user, logout }) => {
  const btnTheme = {
    margin: "1rem 0 0 0",
    color: styleGuides.darkgray,
    fontSize: "1rem",
    width: "inherit",
    padding: "0rem 1rem",
    bgc: "white",
    borderColor: styleGuides.gray,
    hoverbgc: styleGuides.lightred,
    fweight: styleGuides.light,
    height: "3rem",
    hoverbc: styleGuides.lightred,
    hovercolor: "white"
  };

  return (
    <StyledProfile>
      <Icon icon="person" fontSize="5rem" />
      <h2>{user.fullname}</h2>
      <ThemeProvider theme={btnTheme}>
        <Button>Edit</Button>
      </ThemeProvider>
      <ThemeProvider theme={btnTheme}>
        <Button onClick={logout}>Logout</Button>
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
