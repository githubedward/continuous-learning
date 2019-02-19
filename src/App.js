import React, { Component } from "react";
import GlobalStyle from "./themes/GlobalStyle";
import { Provider } from "react-redux";
import AuthContainer from "./components/Auth/AuthContainer";
import configureStore from "./state/store/store";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <AuthContainer />
        <h1>Hello World!</h1>
      </Provider>
    );
  }
}

export default App;
