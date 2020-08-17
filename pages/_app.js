import { ThemeProvider } from "styled-components";
import GlobalStyles from "../shared/shared-styles";
import { theme } from "../shared/theme";
import Header from "../components/header";
import menuLinks from "../config/menuLinks";
import Footer from "../components/footer";
import Head from "next/head";
import React, { useState, useRef } from "react";


const App = ({ Component, pageProps }) => {

  const [open, setOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>שקד משכנתאות</title>
        <link rel="icon" href="/logos/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header open={open} setOpen={setOpen} menuLinks={menuLinks} />

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            minHeight: 400,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
