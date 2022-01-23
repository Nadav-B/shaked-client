import React from "react";
import styled from "@emotion/styled";

import Articles from "../pages/articles";
import Contact from "../pages/contact";
import Surveys from "../pages/surveys";
import About from "../pages/about";
import Services from "../pages/services";

import Meta from "../components/Meta";
import Flex from "../elements/Flex";
const Index = () => {
  return <Homepage />;
};

const Homepage = () => {
  return (
    <Flex flexDirection="column">
      <Meta />
      <StyledLandingPage>
        <StyledText>
          <h1> שקד משכנתאות</h1>
          <h2> יעוץ משכנתאות וכלכלת המשפחה</h2>
        </StyledText>
      </StyledLandingPage>
      <ContentBackground id="about">
        <About disableMetadata={true} />
      </ContentBackground>
      <CustomBackground id="surveys">
        <Surveys disableMetadata={true} />
      </CustomBackground>
      <ContentBackground>
        <CustomBackground2 id="articles">
          <Articles disableMetadata={true} />
        </CustomBackground2>
        <ContentBackground id="services">
          <Services disableMetadata={true} />
        </ContentBackground>
        <ContentBackground id="contact">
          <Contact disableMetadata={true} />
        </ContentBackground>
      </ContentBackground>
    </Flex>
  );
};

const ContentBackground = styled.div`
  background: white;
`;

const CustomBackground = styled.div`
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
`;

const CustomBackground2 = styled.div`
  background-image: linear-gradient(to bottom, #dfe9f3 0%, white 100%);
`;

const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  text-align: center;
`;

const StyledText = styled.div`
  h1 {
    font-size: 50px;
    color: ${(p) => p.theme.colors.darkGreen
 };
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
