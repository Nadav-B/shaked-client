import React from "react";
import { Global, css } from "@emotion/core";
import { theme } from "./theme";

const styles = css`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.normal};
    font-family: ${theme.fontFamily};
  }

  * {
    box-sizing: border-box;
    direction: rtl;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
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

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
