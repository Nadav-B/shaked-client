import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Articles from "../pages/articles";
import Contact from "../pages/contact";
import Surveys from "../pages/surveys";
import About from "../pages/about";
import Services from "../pages/services";

import Meta from "../components/Meta";
const Index = () => {
  return <Homepage />;
};

const Homepage = () => {
  return (
    <div>
      <Meta />
      <StyledLandingPage>
        <StyledBackground />
        <StyledText>
          <h1> שקד משכנתאות</h1>
          <Text> יעוץ משכנתאות וכלכלת המשפחה</Text>
        </StyledText>
      </StyledLandingPage>
      <ContentBackground>
        <About disableMetadata={true} />
      </ContentBackground>
      <CustomBackground>
        <Surveys disableMetadata={true} />
      </CustomBackground>
      <ContentBackground>
        <CustomBackground2>
          <Articles disableMetadata={true} />
        </CustomBackground2>
        <Services disableMetadata={true} />
        <Contact disableMetadata={true} />
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

const StyledText = styled.div`
    position: absolute;
    top: 1vw;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    color: #000;
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 15px;
      color: black;
  `;

const StyledBackground = styled.div`
  position: fixed;
  width: 150%;
  height: 560px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(204, 214, 228, 1) 100%
  );
  top: -100px;
  right: -300px;
  z-index: -4;
  border-radius: 150px;
  opacity: 0.48;
  transform: rotate(5deg);

  @media only screen and (max-width: 1050px) {
    position: fixed;
    height: 500px;
    width: 1500px;

    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(204, 214, 228, 1) 100%
    );
    top: -200px;
    right: -150px;
    z-index: -4;
    border-radius: 130px;
    opacity: 0.48;
    transform: rotate(10deg);
  }
`;

const StyledLandingPage = styled.div`

    position: relative;
    width: auto;
    height: 400px;
    overflow: hidden;
    background: transparent;

 
    h1 {
      font-size: 40px;
      color: ${(p) => p.theme.colors.navyBlue};
    }
    h2 {
      font-size: 30px;
    }
  }
  
  
  
  .surveys-seciton {
    background-color:transparent;
  }
  
  
  
  .about:hover {
    -webkit-filter: opacity(0.5) drop-shadow(0 0 0 rgb(40, 46, 135));
    filter: opacity(0.5) drop-shadow(0 0 0 rgb(40, 46, 135));
  }
  
  @media only screen and (max-width: 1050px) {
    
  .landing-section {
  
    height: 300px;
  
    //  background-color: red;
    .caption {
      position: absolute;
      top: 1vw;
      right: 0;
      left: 0;
      bottom: 0;
      text-align: center;
      color: #000;
  
      h1 {
        font-size: 35px;
      }
      h2 {
        font-size: 15px;
        color: black;
      }
    }
    .landing-background {
      position: fixed;
      height: 500px;
      width: 1500px;
  
      background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(204, 214, 228, 1) 100%);
      top: -200px;
      right: -150px;
      z-index: -4;
      border-radius: 130px;
      opacity: 0.48;
      transform: rotate(10deg);
    }
  
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 30px;
    }
  }
  
  }

`;
export default Index;
