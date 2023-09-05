import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#ffffff",
    success: "#00ff00",
  },
  zIndex: {
    background: 0,
    land: 1,
    player: 10,
    foreground: 100,
    ui: 1000,
    controls: 10000,
  },
};

export default theme;
