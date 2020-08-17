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
        <StyledMenu>
          <Component {...pageProps} />
        </StyledMenu>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

const StyledMenu = styled.menu`
  margin: 0 auto;
  width: 80%;
  padding-top: 130px;
  min-height: 500px;
`;

export default App;
