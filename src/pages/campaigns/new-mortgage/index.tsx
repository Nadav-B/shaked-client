import React from "react";

import Meta from "../../../components/Meta";
import TextWrapper from "../../../elements/TextWrapper";
import Flex from "../../../elements/Flex";

import Services from "../../services";
import Contact from "../../contact";
import Reviews from "../../../components/reviews";
import styled from "@emotion/styled";
import Title from "../../../elements/Title";

import Text from "../../../elements/Text";

const seo = {
    description: "השאירו פרטים ונחזור אליכם בהקדם",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/campaigns/new-mortgage`,
};


const NewMortgage: React.FC = ({}) => {

    return (
        <>
            <Meta seo={seo}/>
            <Flex fontSize="18px" flexDirection="column" justifyContent="center">
                <Flex alignItems="center" flexDirection="column">
                    <StyledHeadlineTitle>"הבחירה הנכונה שלכם"</StyledHeadlineTitle>

                    <ProductBox id="contact">
                        <StyledSubTitle>ליווי משכנתא חדשה </StyledSubTitle>
                        <StyledCircle>
                            <StyledOfferText>הנחה לזמן מוגבל</StyledOfferText>
                        </StyledCircle>
                    </ProductBox>
                </Flex>
                <Contact category="קמפיין ליווי משכנתא" title="לתאום שיחה ללא התחייבות"
                         disableMetadata={true}></Contact>

                <Title> למה שקד?</Title>
                <TextWrapper>
                    <Text textAlign="center">
                        התאמת משכנתא אישית בהתאם לצרכים שלכם
                    </Text>

                    <Text textAlign="center">
                        מכרז בין הבנקים והשגת התנאים האולטימטיביים עבורכם
                    </Text>

                    <Text textAlign="center">
                        ליווי מלא לאורך כל התהליך
                    </Text>

                    <Text fontWeight="bold" textAlign="center">
                        מקצועיות, אמינות, זמינות והרבה סבלנות..
                    </Text>
                </TextWrapper>

                <Title> מי אנחנו?</Title>

                <TextWrapper>
                    <Text textAlign="center">
                        שקד משכנתאות - הינו משרד קטן ואישי הכולל יועצים מהמובילים בשוק המשכנתאות,
                    </Text>
                    <Text textAlign="center">
                        בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה.
                    </Text>
                    <Text textAlign="center">
                        היועצים שלנו ילוו אתכם לאורך כל הדרך,
                    </Text>
                    <Text fontWeight="bold" textAlign="center">
                        באופן מקצועי והכי אישי שיש!
                    </Text>
                </TextWrapper>

                <Reviews/>

                <Services backSide={false} disableMetadata={true}/>
                {/*
                       <a href={"#contact"}>
                    <Bubbel></Bubbel>
                </a>
                */}
                <TextWrapper>
                    <Text fontSize="medium">
                        * המחיר וההנחה יאושרו רק לאחר בחינת התיק על ידי המשרד
                        ולא יחולו על תיקים עם מורכבות כגון לקוחות מוגבלים, בניה עצמית, בעלי חברות וכו'.

                    </Text>

                </TextWrapper>
            </Flex>
        </>
    );
};


const StyledHeadlineTitle = styled.div`
  margin: 9px 15px 0 19px;
  font-size: 40px;
  font-weight: bold;
  width: auto;
  line-height: 1;
  text-align: right;
  color: #21646b;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
  }
`;

const ProductBox = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  width: auto;
  justify-content: center;
  @keyframes scaleIn {
    from {
      transform: scale(0.6, 0.6);
      opacity: 0.5;
    }
    to {
      transform: scale(0.7, 0.7);
      opacity: 0;
    }
  }
`;

const StyledSubTitle = styled.div`
  margin-right: 30px;
  font-size: 35px;
  font-weight: bold;
  line-height: 1;
  text-align: right;
  color: #21646b;
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    max-width: 120px;

  }
`;

const StyledCircle = styled.div`
  position: relative;

  display: flex;
  height: 160px;
  width: 160px;
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

const StyledOfferText = styled.div`
  color: white;
  font-size: ${(p) => p.theme.fontSize.xl};
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    font-size: ${(p) => p.theme.fontSize.xl};
  }
`;

export default NewMortgage;
