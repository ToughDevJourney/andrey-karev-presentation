import { createGlobalStyle } from "styled-components";
import Noah from "./assets/fonts/Noah.ttf";
import Pixeloid from "./assets/fonts/Pixeloid.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'Pixeloid';
      src: url(${Pixeloid}) ;
      font-style: normal;
      font-display: block;
  }

  @font-face {
      font-family: 'Noah';
      src: url(${Noah}) ;
      font-style: normal;
      font-display: block;
  }

  body {
    margin: 0;
    overflow: hidden;
  }

  div {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Pixeloid';
    margin: 0;
  }

  p, span, a {
    font-family: 'Noah';
    margin: 0;
  }
`;

export default GlobalStyles;
