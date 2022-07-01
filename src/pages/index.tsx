import React from "react";
import styled from "@emotion/styled";

import Articles from "../pages/articles";
import Contact from "../pages/contact";
import Surveys from "../pages/surveys";
import About from "./about";
import Services from "../pages/services";

import Meta from "../components/meta";
import Flex from "../elements/Flex";
import Seo from "../classes/seo";
import Reviews from "../components/reviews";

const Index = () => {
    return <Homepage/>;
};

const Homepage = () => {
    return (
        <Flex flexDirection="column">
            <Meta seo={new Seo()}/>


            <StyledLandingPage>
                <StyledText>
                    <h1> שקד משכנתאות</h1>
                    <h2> יעוץ משכנתאות וכלכלת המשפחה</h2>
                </StyledText>
            </StyledLandingPage>
                <About disableMetadata={true}/>
            <ContentBackground id="surveys">
                <Surveys disableMetadata={true}/>
            </ContentBackground>
            <ContentBackground id="articles">
                <Articles disableMetadata={true}/>
            </ContentBackground>
            <ContentBackground id="services">
                <Services backSide={false} disableMetadata={true}/>
            </ContentBackground>
            <ContentBackground>
                <Reviews/>
            </ContentBackground>
            <ContentBackground id="contact">
                <Contact disableMetadata={true}/>
            </ContentBackground>

        </Flex>
    );
};



const ContentBackground = styled.div`
background: #ECE9E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
