import { ThemeProvider } from "styled-components";
import GlobalStyles from "../shared/shared-styles";
import { theme } from "../shared/theme";
import Header from "../components/header";
import menuLinks from "../config/menuLinks";
import Footer from "../components/footer";

import Head from "next/head";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import GoogleTagManager from "../socialNetwork/GoogleTagManager";
import "react-sweet-progress/lib/style.css";
import { ApolloProvider } from "@apollo/client";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useApollo } from "../apollo-client";
import { AuthProvider } from "../shared/auth";
import { JSONLD, Product, Brand } from "react-structured-data";

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <>
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

            <script
              dangerouslySetInnerHTML={{
                __html: `            <script type="application/ld+json">
{
  "@context" : "http://schema.org",
   "brand" : {
    "@type" : "Brand",
    "name" : "שקד משכנתאות",
    "logo" : "https://shakedm.co.il/logos/favicon.svg"
  }
}

</script>`,
              }}
            />
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
