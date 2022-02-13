import React from "react";

import Meta from "../../../components/Meta";
import TextWrapper from "../../../elements/TextWrapper";
import Flex, {FlexProps} from "../../../elements/Flex";

import Services from "../../services";
import Contact from "../../contact";
import Reviews from "../../../components/reviews";
import styled from "@emotion/styled";
import Title from "../../../elements/Title";
import {TypographyProps, typography} from 'styled-system'
import shouldForwardProp from "@styled-system/should-forward-prop";

import Text from "../../../elements/Text";

const seo = {
    title: "מבצע ליווי משכנתא חדשה",
    description: "השאירו פרטים ונחזור אליכם בהקדם",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/campaigns/new-mortgage`,
};


const NewMortgage: React.FC = ({}) => {

    return (
        <StyledWrapper>
            <Meta seo={seo}/>
            <Flex fontSize="18px" flexDirection="column" justifyContent="center">
                <Flex alignItems="center" flexDirection="column">
                    <StyledHeadlineTitle>"הבחירה הנכונה שלכם"</StyledHeadlineTitle>

                    <ProductBox id="contact">
                        <StyledSubTitle>ליווי משכנתא חדשה </StyledSubTitle>
                        <StyledCircle>
                            <StyledOfferText>הנחה לזמן מוגבל*</StyledOfferText>
                            <StyledPrice>
                                <StyledCurrency fontSize={15}>₪</StyledCurrency>
                                6,500</StyledPrice>
                            <StyledOfferText>
                                במקום
                                <StyledUnderline> <StyledCurrency fontSize={10}>
                                    ₪
                                </StyledCurrency>7,900
                                </StyledUnderline>
                            </StyledOfferText>
                        </StyledCircle>
                    </ProductBox>
                </Flex>
                <Contact category="קמפיין ליווי משכנתא" title="לתאום שיחה ללא התחייבות"
                         disableMetadata={true}></Contact>

                <StyledWrapper>

                    <Title> למה שקד?</Title>
                    <Text>
                        התאמת משכנתא אישית בהתאם לצרכים שלכם
                    </Text>

                    <Text>
                        מכרז בין הבנקים והשגת התנאים האולטימטיביים עבורכם
                    </Text>

                    <Text>
                        ליווי מלא לאורך כל התהליך
                    </Text>

                    <Text fontWeight="600">
                        מקצועיות, אמינות, זמינות והרבה סבלנות.
                    </Text>

                </StyledWrapper>

                <StyledWrapper>

                    <Title> מי אנחנו?</Title>

                    <Text>
                        שקד משכנתאות הינו משרד קטן ואישי הכולל יועצים מהמובילים בשוק המשכנתאות,
                    </Text>
                    <Text>
                        בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה.
                    </Text>

                    <Text>
                        היועצים שלנו ילוו אתכם לאורך כל הדרך
                    </Text>
                    <Text fontWeight="bold">
                        באופן מקצועי והכי אישי שיש!
                    </Text>
                </StyledWrapper>

                <StyledWrapper>

                    <Reviews/>
                </StyledWrapper>
                <StyledWrapper>

                    <Services backSide={false} disableMetadata={true}/>
                </StyledWrapper>

                <TextWrapper>
                    <Text fontSize="medium">
                        * המחיר וההנחה יאושרו רק לאחר בחינת התיק על ידי המשרד
                        ולא יחולו על תיקים עם מורכבות כגון לקוחות מוגבלים, בניה עצמית, בעלי חברות וכו'.

                    </Text>

                </TextWrapper>
            </Flex>
        </StyledWrapper>
    );
};


const StyledHeadlineTitle = styled.div`
  margin: 9px 15px 0 19px;
  font-color: black;
  font-size: 2vw;
  font-weight: bold;
  width: auto;
  line-height: 1;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 6vw;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    font-size: 8vw;
  }

`;


const StyledSubTitle = styled.div`
  margin-right: 30px;
  font-size: 2vw;
  font-weight: bold;
  line-height: 1;
  text-align: right;
  color: #21646b;


  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    max-width: 120px;
    font-size: 5vw;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    max-width: 120px;
    font-size: 8vw;
  }

`;


const StyledOfferText = styled.div`
  color: white;
  font-size: 1vw;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 2vw;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    font-size: 4vw;
  }
`;


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    align-items: flex-start;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
const ProductBox = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  justify-content: space-evenly;
  max-width: 500px;
  align-items: baseline;
`;


const StyledCircle = styled.div`
  position: relative;
  display: flex;
  height: 11vw;
  width: 11vw;
  font-weight: bold;
  align-items: center;
  background-color: #21646b;
  border-radius: 50%;
  transform: rotate(-15deg); /* Equal to rotateZ(45deg) */
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    height: 22vw;
    width: 22vw;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    height: 35vw;
    width: 35vw;
  }
`;

const StyledPrice = styled.div`
  color: white;
  font-size: ${(p) => p.theme.fontSize.xl};
  text-align: center;
  font-weight: bold;
`;


const StyledUnderline = styled.span`
  text-decoration: line-through;
`;

const StyledCurrency = styled("span", {shouldForwardProp})<TypographyProps>(
    () => ({
        marginRight: "2px",
    }),

    typography
);


export default NewMortgage;
