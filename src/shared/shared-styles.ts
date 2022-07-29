import { createGlobalStyle } from "styled-components";
import theme from "../shared/theme";

const GlobalStyles = createGlobalStyle`

  
  * {
    box-sizing: border-box;
    direction: rtl;
  }

  html {
  scroll-behavior: smooth;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.normal};
    font-family: ${theme.fontFamily};
  }


  img {
    width: 100%;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    color: #0a589d;
  }

  .ltr {
    direction: ltr;
  }

`;

export default GlobalStyles;
