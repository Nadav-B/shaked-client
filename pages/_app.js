import App from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../shared/shared-styles";
import { theme } from "../shared/theme";
import Header from "../components/header";
import menuLinks from "../config/menuLinks";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>Shaked</h1>
        <Header menuLinks={menuLinks} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    );
  }
}
