import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MobileContainer, AppContainer } from "./themes/AppContainer";

ReactDOM.render(
  <AppContainer>
    <MobileContainer>
      <App />
    </MobileContainer>
  </AppContainer>,
  document.getElementById("root")
);
