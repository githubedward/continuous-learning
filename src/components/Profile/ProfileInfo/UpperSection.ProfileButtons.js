import React from "react";
import PropTypes from "prop-types";
import Button from "../../shared/Button";
import styled, { ThemeProvider } from "styled-components";
import * as styleGuides from "../../shared/style-variables";

const StyledButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const ProfileButtons = ({ logout, toggleEditProfile }) => {
  const btnTheme = {
    margin: "1rem 0 0 0",
    color: styleGuides.darkgray,
    fontSize: ".8rem",
    width: "inherit",
    padding: "0rem 1rem",
    bgc: "white",
    borderColor: styleGuides.gray,
    hoverbgc: styleGuides.lightred,
    fweight: styleGuides.light,
    height: "1.75rem",
    hoverbc: styleGuides.lightred,
    hovercolor: "white"
  };
  return (
    <StyledButtonsDiv>
      <ThemeProvider theme={btnTheme}>
        <Button onClick={() => toggleEditProfile(true)}>Edit Profile</Button>
      </ThemeProvider>
      <ThemeProvider theme={btnTheme}>
        <Button onClick={logout} style={{ marginLeft: ".9rem" }}>
          Logout
        </Button>
      </ThemeProvider>
    </StyledButtonsDiv>
  );
};

ProfileButtons.propTypes = {
  logout: PropTypes.func.isRequired
};

export default ProfileButtons;
