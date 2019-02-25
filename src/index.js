// import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { MobileContainer, AppContainer } from "./themes/AppContainer";

ReactDOM.render(
  <AppContainer>
    <MobileContainer>
      <Root />
    </MobileContainer>
  </AppContainer>,
  document.getElementById("root")
);
