import { ThemeProvider } from "styled-components";
import GlobalStyles from "../shared/shared-styles";
import { theme } from "../shared/theme";
import Header from "../components/header";
import menuLinks from "../config/menuLinks";
import Footer from "../components/footer";
import Head from "next/head";
import React, { useState, useRef } from "react";
import styled from "styled-components";

const App = ({ Component, pageProps }) => {
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
        <Header menuLinks={menuLinks} />
        <StyledBody>
          <Component {...pageProps} />
        </StyledBody>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

const StyledBody = styled.menu`
  margin: auto;
  width: 90%;
  padding: 0;
  min-height: 400px;
`;

export default App;
