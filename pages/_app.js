import App from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../shared/shared-styles";
import { theme } from "../shared/theme";
import Header from "../components/header";
import menuLinks from "../config/menuLinks";
import Footer from "../components/footer";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>שקד משכנתאות</title>
          <link rel="icon" href="/logos/favicon.ico" />
        </Head>

        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header menuLinks={menuLinks} /> 
    
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              minHeight: 470,

              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main>
              <Component {...pageProps} />
            </main>



          </div>
            <Footer/>
        </ThemeProvider>
      </div>
    );
  }
}
