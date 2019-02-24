import React, { Component } from "react";
// import GlobalStyle from "./themes/GlobalStyle";
import { Provider } from "react-redux";
import AuthContainer from "./components/Auth/AuthContainer";
import configureStore from "./state/store/store";
import StyledApp from "./themes/StyledApp";
import "./index.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Provider store={store}>
          {/* <GlobalStyle /> */}
          <AuthContainer />
        </Provider>
      </StyledApp>
    );
  }
}

export default App;
