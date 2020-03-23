import * as React from "react";
import { render } from "react-dom";

import {
  CSSReset,
  ThemeProvider,
  theme,
} from "@chakra-ui/core";

import WaveBg from "./components/WaveBg";
import SourceLinkBox from "./components/SourceLink";
import MainPanel from "./components/MainPanel";

const App = () => {
  const customTheme = {
    ...theme,
    shadows: {
      outline: "none",
    }
  };

  const baseDivStyle = {
    width: '100%',
    height: '100%',
    position:'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f0f0'
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <div style={baseDivStyle}>
        <MainPanel/>
        <WaveBg/>
        <SourceLinkBox/>
      </div>
    </ThemeProvider>
  );

};

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
