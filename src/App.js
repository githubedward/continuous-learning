import React, { Component } from "react";
import GlobalStyle from "./themes/GlobalStyle";
import styled from "styled-components";

const Test = styled.div`
  color: black;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
