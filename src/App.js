import React, { Component } from "react";
import GlobalStyle from "./themes/GlobalStyle";
import { Provider } from "react-redux";
import AuthContainer from "./components/Auth/AuthContainer";
import configureStore from "./state/store/store";
import styled from "styled-components";

const store = configureStore();

const StyledApp = styled.main`
  height: 100%;
  width: 100%;
  background-color: white;
  z-index: 99;

  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Provider store={store}>
          <GlobalStyle />
          <AuthContainer />
        </Provider>
      </StyledApp>
    );
  }
}

export default App;
