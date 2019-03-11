import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import * as styleGuides from "../../shared/style-variables";
import Icon from "../../shared/Icon";
import Anchor from "../../shared/Anchor";
import { Input, Label } from "../../shared/FormComponents";
import EditProfileForm, { btnTheme } from "./EditProfileForm/EditProfileForm";
import PageContainer from "../../shared/PageContainer";
import Button from "../../shared/Button";
import { ProfilePhoto } from "../ProfileInfo/UpperSection";

// STYLES

const StyledProfileIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px ${styleGuides.lightred} solid;
  border-radius: 50%;
  background-color: ${styleGuides.lightred};
  padding: 1rem;
  margin: 0 0 1rem 0;

  animation: ${styleGuides.appear} 500ms ease-in;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${p =>
    p.activeEdit && `0px 0px 5px 2px rgba(209, 209, 209, 0.3)`};
  padding: ${p => p.activeEdit && `1rem`};
`;

const EditPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  animation: ${styleGuides.appear} 500ms ease-in;
`;

const FileLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 1.75rem;
  font-size: 0.8rem;
  margin: 1rem 0.5rem 0 0.5rem;
  padding: 0rem 1rem;
  font-weight: ${styleGuides.light};
  color: ${styleGuides.darkgray};
  border: 1px solid ${styleGuides.gray};
  border-radius: 3px;

  &:hover {
    background: ${styleGuides.lightred};
    transition: 0.3s;
    border: 1px solid ${styleGuides.lightred};
    color: white;
  }
`;

const fileInput = {
  width: `0.1px`,
  height: `0.1px`,
  opacity: `0`,
  overflow: `hidden`,
  position: `absolute`,
  zIndex: `-1`
};

// COMPONENT

class EditProfile extends Component {
  state = {
    avatar: "",
    changed: false
  };
  // create ref of file input
  imageInput = React.createRef();

  _onUploadAvatar = values => {
    this.setState({
      avatar: values
    });
  };

  render() {
    const { editProfilePhoto: activeEditPhoto } = this.props.profile;
    const {
      saveProfileChanges,
      editProfilePhoto,
      uploadAvatar,
      removeAvatar
    } = this.props;
    const { user } = this.props;
    const localAvatar = this.state.avatar;

    const editPhotoJSX = (
      <EditPhotoDiv>
        <Links>
          <Anchor
            onClick={async () => {
              if (this.state.avatar) removeAvatar();
              await this.setState({
                avatar: ""
              });
              editProfilePhoto(false);
            }}
          >
            Cancel
          </Anchor>
          <Anchor
            onClick={() => {
              uploadAvatar(localAvatar);
              editProfilePhoto(false);
            }}
          >
            Save
          </Anchor>
        </Links>
        <FileLabel>
          Upload Photo
          <input
            style={fileInput}
            ref={this.imageInput}
            type="file"
            onChange={() => {
              if (this.imageInput.current.files[0]) {
                this._onUploadAvatar(
                  window.URL.createObjectURL(this.imageInput.current.files[0])
                );
                this.setState({
                  changed: true
                });
              }
            }}
          />
        </FileLabel>
        <ThemeProvider theme={btnTheme}>
          <Button
            type="button"
            onClick={() => {
              if (this.state.avatar) {
                this.setState({
                  avatar: ""
                });
              }
              if (user.avatar) removeAvatar();
            }}
          >
            Remove Photo
          </Button>
        </ThemeProvider>
      </EditPhotoDiv>
    );

    return (
      <PageContainer>
        <PhotoContainer activeEdit={activeEditPhoto}>
          {((localAvatar || user.avatar) && (
            <ProfilePhoto src={localAvatar || user.avatar} />
          )) || (
            <StyledProfileIcon>
              <Icon icon="person" fontSize="5rem" color="white" />
            </StyledProfileIcon>
          )}
          {(activeEditPhoto && editPhotoJSX) || (
            <Anchor onClick={() => editProfilePhoto(true)}>Edit</Anchor>
          )}
        </PhotoContainer>
        <EditProfileForm
          {...this.props}
          changedAvatar={this.state.changed}
          onSubmit={saveProfileChanges}
        />
      </PageContainer>
    );
  }
}

EditProfile.propTypes = {};

export default EditProfile;
