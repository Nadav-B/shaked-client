import styled from "@emotion/styled";
import SizeWrapper from "../elements/SizeWrapper";
import Flex from "../elements/Flex";
import Image from "next/image";

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledItem>שקד משכנתאות</StyledItem>
    <Flex>
      <StyledItem>
        <label>טלפון:</label>
        <a href="tel:+97250742491934"> 050-7424-919</a>
      </StyledItem>
      <StyledItem>
        <label>פקס:</label>
        <a href="077-3179998"> 050-7424-919</a>
      </StyledItem>
    </Flex>

    <Flex>
      <StyledItem>
        <a href="mailto:shay@shakedm.co.il?Subject=Hello" target="_top">
          shay@shakedm.co.il
        </a>
      </StyledItem>
    </Flex>

    <Flex>
      <StyledItem>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/%D7%A9%D7%A7%D7%93-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-%D7%99%D7%A2%D7%95%D7%A5-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-%D7%95%D7%9B%D7%9C%D7%9B%D7%9C%D7%AA-%D7%9E%D7%A9%D7%A4%D7%97%D7%94-2177117312351276/"
        >
          <Image className="center" src="/icons/facebook.svg" alt="Facebook" />
        </a>
      </StyledItem>

      <StyledItem>
        <a target="_blank" rel="noreferrer" href="https://wa.me/972507424919">
          <Image className="center" src="/icons/whatsapp.svg" alt="Whatsapp" />
        </a>
      </StyledItem>
    </Flex>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #21646b;
  padding-bottom: 20px;
  @media screen and (max-width: 700px) {
  }
`;

const StyledItem = styled.div`
  padding-top: 4px;
  color: white;
  margin-right: 6px;
  margin-left: 6px;
  font-weight: normal;

  a {
    color: white;
  }

  a:hover {
    font-weight: normal;
    color: white;
  }
`;

export default Footer;
