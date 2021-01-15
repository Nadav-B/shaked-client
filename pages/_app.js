import { ThemeProvider } from "styled-components";
import GlobalStyles from "../shared/shared-styles";
import { theme } from "../shared/theme";
import Header from "../components/header";
import menuLinks from "../config/menuLinks";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

import Head from "next/head";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import GoogleTagManager from "../socialNetwork/GoogleTagManager";
import "react-sweet-progress/lib/style.css";
import { ApolloProvider } from "@apollo/react-hooks";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useApollo } from "../apollo-client";
import { AuthProvider } from "../shared/auth";
import MetadataManager from "../components/metadataManager";

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);
  const metadata = new MetadataManager();

  return (
    <>
      <Helmet
      base={true}
        title={metadata.getTitle()}
        link={metadata.getLinks()}
        meta={metadata.getMetadatas()}
      />
      <Helmet>
        <html lang="he" />
      </Helmet>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
              rel="stylesheet"
            ></link>

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
