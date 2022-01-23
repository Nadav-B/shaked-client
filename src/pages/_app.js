import { jsx, ThemeProvider } from "@emotion/react";

import GlobalStyles from "../shared/shared-styles";
import { theme } from "../shared/theme";
import Header from "../components/header";
import menuLinks from "../config/menuLinks";
import Footer from "../components/footer";
import { css, Global } from "@emotion/react";

import Head from "next/head";
import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import GoogleTagManager from "../socialNetwork/GoogleTagManager";
import "react-sweet-progress/lib/style.css";
import { ApolloProvider } from "@apollo/client";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useApollo } from "../../apollo-client";
import { AuthProvider } from "../shared/auth";

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  const requiredStyles = css`
    @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Assistant:wght@200&display=swap");
  `;

  return (
    <>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <Head>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="logos/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="logos/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="logos/favicon-16x16.png"
            />
            <meta name="theme-color" content="#ffffff" />
            <GoogleTagManager />
          </Head>

          <ThemeProvider theme={theme}>
            <Global styles={requiredStyles} />

            <GlobalStyles />
            <Header menuLinks={menuLinks} />
            <StyledBody>
              <Component {...pageProps} />
            </StyledBody>
            <Footer />
          </ThemeProvider>
        </ApolloProvider>
      </AuthProvider>
    </>
  );
};

const StyledBody = styled.menu`
  margin: auto;
  padding: 0;
`;

export default App;
