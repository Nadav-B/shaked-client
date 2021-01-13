import { ThemeProvider } from "styled-components";
import GlobalStyles from "../shared/shared-styles";
import { theme } from "../shared/theme";
import Header from "../components/header";
import menuLinks from "../config/menuLinks";
import Footer from "../components/footer";
import SEO from "../components/seo";

import Head from "next/head";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import GoogleTagManager from "../socialNetwork/GoogleTagManager";
import "react-sweet-progress/lib/style.css";
import { ApolloProvider } from "@apollo/react-hooks";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useApollo } from "../apollo-client";
import { AuthProvider } from "../shared/auth";
const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <Head>
            <meta charset="utf-8" />
            <title>שקד משכנתאות | יעוץ משכנתאות וכלכלת המשפחה

</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
              rel="stylesheet"
            ></link>
            <SEO></SEO>
            <GoogleTagManager />
          </Head>
          <ThemeProvider theme={theme}>
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
  min-height: 550px;
`;

export default App;
