import React, { Component } from "react";
import Router from "../router";
import { ThemeProvider } from "styled-components";
import { colorsDark, colorsLight } from "styles/colors";
import { themes } from "store/app/utils";

class App extends Component {
  componentDidMount() {
    this.setBodyBackgroundColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor() {
    if (this.props.theme === themes.light) {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }
  render() {
    return (
      <ThemeProvider theme={colorsDark}>
        <Router />
      </ThemeProvider>
    );
  }
}

export default App;
