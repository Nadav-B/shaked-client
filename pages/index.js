import React from "react";
import styled from "styled-components";
import Articles from "../pages/articles";
import Contact from "../pages/contact";
import Surveys from "../pages/surveys";
import About from "../pages/about";
import Services from "../pages/services";

import Meta from "../components/Meta";
import Wrapper from "../elements/Wrapper";
const Index = () => {
  return <Homepage />;
};

const Homepage = () => {
  return (
    <div>
      <Meta />
      <Wrapper>
        <StyledLandingPage>
          <StyledText>
            <h1> שקד משכנתאות</h1>
            <h2> יעוץ משכנתאות וכלכלת המשפחה</h2>
          </StyledText>
          <img src="landing/towers.jpg" alt="Shaked" />
        </StyledLandingPage>
      </Wrapper>
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
    </div>
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
  position: relative;
  top: -10px;
`;

const StyledText = styled.div`
  position: absolute;
  top: 13%;
  right: 0;
  left: 0;
  text-align: center;
  h1 {
    font-size: 30px;
    color: ${(p) => p.theme.colors.navyBlue};
    padding: 10;
    margin: auto;
  }
  h2 {
    font-size: 14px;
  }
`;



export default Index;
