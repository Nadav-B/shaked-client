import App from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../shared/shared-styles";
import { theme } from "../shared/theme";
import Header from "../components/header";
import menuLinks from "../config/menuLinks";
import Footer from "../components/footer"
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
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

        <Footer/>
      </ThemeProvider>
    );
  }
}
