import { ThemeProvider } from "@emotion/react";

import GlobalStyles from "../shared/shared-styles";
import theme from "../shared/theme";
import Header from "../components/Header";
import menuLinks from "../config/menuLinks";
import Footer from "../components/Footer";
import { css, Global } from "@emotion/react";

import styled from "@emotion/styled";
import "react-sweet-progress/lib/style.css";
import { ApolloProvider } from "@apollo/client";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import client from "../../apollo-client";
import { AuthProvider } from "../shared/auth";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  const requiredStyles = css`
    @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap");
  `;

  return (
    <>
      <AuthProvider>
        <ApolloProvider client={client}>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=GTM-KN4G37P"
            strategy="afterInteractive"
          />
          <ThemeProvider theme={theme}>
            <Global styles={requiredStyles} />
            <GlobalStyles theme={theme} />
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
