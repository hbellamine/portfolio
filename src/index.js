import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import ReactGA from 'react-ga';
ReactGA.initialize('G-00NNSTSZH4')

ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
