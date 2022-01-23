import React, { useState } from "react";

import Meta from "../../../components/Meta";
import Wrapper from "../../../elements/Wrapper";
import TextWrapper from "../../../elements/TextWrapper";
import Flex from "../../../elements/Flex";

import Services from "../../services";
import Contact from "../../contact";
import Reviews from "../../../components/reviews";
import styled from "@emotion/styled";
import Title from "../../../elements/Title";

const seo = {
  description: "השאירו פרטים ונחזור אליכם בהקדם",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
};

const NewMortage: React.FC = ({}) => {
  return (
    <Wrapper>
      <Flex flexDirection="column">
        <HeadlineWrapper>
          <StyledHeadlineTitle>"הבחירה הנכונה שלכם"</StyledHeadlineTitle>

          <ProductBox>
            <StyledSubTitle>ליווי משכנתא חדשה </StyledSubTitle>
            <StyledCircle>
              <StledOfferText>הנחה לזמן מוגבל</StledOfferText>
              <StyledPrice>6,500 ₪</StyledPrice>
              <StledOfferText>במקום 7,900 ₪</StledOfferText>
            </StyledCircle>
          </ProductBox>
        </HeadlineWrapper>

        <Contact
          title="לתאום שיחה ללא התחייבות"
          disableMetadata={true}
        ></Contact>

        <Title> למה שקד?</Title>

        <TextWrapper>
          התאמת משכנתא אישית בהתאם לצרכים שלכם מכרז בין הבנקים והשגת התנאים
          האולטימטיביים עבורכם ליווי מלא לאורך כל התהליך מקצועיות, אמינות,
          זמינות והרבה סבלנות..
        </TextWrapper>

        <Title> מי אנחנו?</Title>

        <TextWrapper>
          שקד משכנתאות - הינו משרד קטן ואישי הכולל יועצים מהמובילים בשוק
          המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת
          הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם לאורך כל הדרך, באופן מקצועי
          והכי אישי שיש.
        </TextWrapper>

        <Reviews />
        <Services disableMetadata={true} />
      </Flex>
    </Wrapper>
  );
};

const HeadlineWrapper = styled.div`
  display: flex;
  width: auto;
  flex-wrap: wrap;
`;

const StyledHeadlineTitle = styled.div`
  margin: 9px 15px 0 19px;
  font-size: 40px;
  font-weight: 600;
  width: 100%;
  line-height: 1;
  text-align: right;
  color: #21646b;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
  }
`;

const ProductBox = styled.div`
  margin-top: 30px;
  margin-bottom:20px;

  display: flex;
  width: 100%;
`;

const StyledSubTitle = styled.div`
  margin-right: 30px;
  font-size: 25px;
  float: right;
  font-weight: bold;
  line-height: 1;
  text-align: right;
  color: #21646b;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
  }
`;

const StyledCircle = styled.div`
  display: flex;
  height: 225px;
  width: 225px;
  float: left;
  font-weight: bold;
  align-items: center;
  background-color: #21646b;
  border-radius: 50%;
  margin-left: 20px;
  transform: rotate(-15deg); /* Equal to rotateZ(45deg) */
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    height: 150px;
    width: 150px;
  }
`;

const StyledPrice = styled.div`
  color: white;
  font-size: ${(p) => p.theme.fontSize.xl};
  text-align: center;
  font-weight: bold;
`;

const StledOfferText = styled.div`
  color: white;
  font-size: ${(p) => p.theme.fontSize.large};
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    font-size: ${(p) => p.theme.fontSize.normal};
  }
`;

export default NewMortage;
