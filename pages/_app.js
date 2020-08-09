import App from "next/app";
import { ThemeProvider } from "styled-components";
import Article from "./article";
import { theme } from "../shared/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <h1>Shaked</h1>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
