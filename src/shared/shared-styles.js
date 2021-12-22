import { theme } from "./theme";
import { createGlobalStyle } from "styled-components";


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
  h1  {
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-bottom: 20px;
    font-size: 21px;
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

`;

export default GlobalStyles;
