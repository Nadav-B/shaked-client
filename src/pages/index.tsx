import React from "react";
import styled from "@emotion/styled";
import Articles from "../pages/articles";
import Contact from "../pages/contact";
import Surveys from "../pages/surveys";
import About from "./about";
import Services from "../pages/services";

import { Flex } from "../elements";
import Reviews from "../components/reviews";

const Index = () => {
  return (
    <Flex flexDirection="column">
      <StyledLandingPage>
        <StyledText>
          <h1> שקד משכנתאות</h1>
          <h2> יעוץ משכנתאות וכלכלת המשפחה</h2>
        </StyledText>
      </StyledLandingPage>
      <About />
      <ContentBackground id="surveys">
        <Surveys />
      </ContentBackground>
      <ContentBackground id="articles">
        <Articles disableMetadata={true} />
      </ContentBackground>
      <ContentBackground id="services">
        <Services backSide={false} disableMetadata={true} />
      </ContentBackground>
      <ContentBackground>
        <Reviews />
      </ContentBackground>
      <ContentBackground id="contact">
        <Contact disableMetadata={true} />
      </ContentBackground>
    </Flex>
  );
};

const ContentBackground = styled.div`
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  text-align: center;
  margin-right: 20px;
  margin-left: 20px;
`;

const StyledText = styled.div`
  h1 {
    font-size: 40px;
    color: ${(p) => p.theme.colors.darkGreen};
    margin: auto;
  }
  h2 {
    font-size: 20px;
    margin: auto;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    top: 11px;
  }
`;

export default Index;
