import React, { Component } from "react";
import GlobalStyle from "./themes/GlobalStyle";
import { Provider } from "react-redux";
import SignupContainer from "./components/Auth/SignupContainer";
import configureStore from "./state/store/store";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <SignupContainer />
        <h1>Hello World!</h1>
      </Provider>
    );
  }
}

export default App;
