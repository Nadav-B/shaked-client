import React from "react";
import styled from "styled-components";
import SizeWrapper from "../elements/SizeWrapper";
import Wave from 'react-wavify'

const Fotter = () => (
  <StyledFooter>
    <StyledItem>שקד משכנתאות</StyledItem>
    <StyledItem>
      נייד:<a href="tel:+97250742491934"> 050-7424-919</a> פקס: 077-3179998
    </StyledItem>
    <StyledItem>
      <a href="mailto:shay@shakedm.co.il?Subject=Hello" target="_top">
        shay@shakedm.co.il
      </a>{" "}
      www.shakedm.co.il
    </StyledItem>
    <StyledItem>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/%D7%A9%D7%A7%D7%93-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-%D7%99%D7%A2%D7%95%D7%A5-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-%D7%95%D7%9B%D7%9C%D7%9B%D7%9C%D7%AA-%D7%9E%D7%A9%D7%A4%D7%97%D7%94-2177117312351276/"
      >
        <SizeWrapper className="center" width={50}>
          <img className="center" src="/icons/facebook.svg" alt="Facebook" />
        </SizeWrapper>
      </a>
      <a target="_blank" rel="noreferrer" href="https://wa.me/972507424919">
        <SizeWrapper className="center" width={50}>
          <img className="center" src="/icons/whatsapp.svg" alt="Whatsapp" />
        </SizeWrapper>
      </a>
    </StyledItem>

    <Wave fill='#F1F3F8'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 2,
        }}
        
  />
  </StyledFooter>
);

const StyledFooter = styled.footer`
  display: column;
  background: white;
  margin: auto;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  align-items: center;

  .center {
    display: inline;
    height: 25px;
    width: auto;
    margin-right: 3px;
    margin-left: 3px;
  }
  @media screen and (max-width: 700px) {
  }
`;

const StyledItem = styled.div`
  display: item;
  padding-top: 4px;
`;

export default Fotter;
