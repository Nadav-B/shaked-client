import React, {useState} from "react";
import styled from "@emotion/styled";
import Wrapper from "../elements/Wrapper";
import Title from "../elements/Title";
import Link from "next/link";
import Flex from "../elements/Flex";

const Reviews: React.FC<{}> = ({}) => {

    const inverted = false;

    return (
        <Flex
            marginRight="20px"
            marginLeft="20px"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >            <Title> מה לקוחות אומרים עלינו?</Title>
            <StyledFlex>


                <a
                    href={
                        "https://www.facebook.com/permalink.php?story_fbid=4120632211333100&id=2177117312351276"
                    }
                >
                    <StyledReview>
                        <StyledCircle>
                            <img src="/reviews/5.jpg"></img>
                        </StyledCircle>
                        <StyledClient>יעל .ב. מכמורת</StyledClient>
                        <StyledComment invertedSide={inverted}>
                            "..לא מתפשר ולא נח עד להשגת היעד ללא פשרות, שבפועל תורגם לחסכון
                            כספי ענק שלי. לא מובן למצוא אנשי מקצוע שנותנים לך שקט ועושים לך
                            חיים קלים באחת ההחלטות הקריטיות בחיים... אתה פשוט איש טוב באמצע
                            הדרך וכן יירבו כמוך."
                        </StyledComment>
                    </StyledReview>
                </a>
                <a

                    href={
                        "https://www.facebook.com/liran.mishali/posts/10161424289698098"
                    }
                >
                    <StyledReview>
                        <StyledCircle>
                            <img src="/reviews/1.jpg"></img>
                        </StyledCircle>
                        <StyledClient> לירן .מ. תל-אביב</StyledClient>
                        <StyledComment invertedSide={!inverted}>
                            "..מתחילת הדרך הרגשנו שאנחנו בידיים טובות.. שי מאוד מקצועי, אמין,
                            ואחראי. בלעדיו לא היינו שורדים את התהליך! .."
                        </StyledComment>
                    </StyledReview>
                </a>

                <a
                    href={
                        "https://www.facebook.com/hadar.berman.5/posts/10158004774682811"
                    }
                >
                    <StyledReview>
                        <StyledCircle>
                            <img src="/reviews/2.jpg"></img>
                        </StyledCircle>{" "}
                        <StyledClient> הדר .מ. חריש</StyledClient>
                        <StyledComment invertedSide={inverted}>
                            "..אין לתאר את ההקלה שמישהו אחר מטפל לך בתסבוכת הזו.. סופר מקצועי,
                            עובד מכל הלב.. היה זמין עבורנו תמיד.. סמכנו עליו בעיניים
                            עצומות!.."
                        </StyledComment>
                    </StyledReview>
                </a>

                <a
                    href={"https://www.facebook.com/asaf.david23/posts/10219299682109947"}
                >
                    <StyledReview>
                        <StyledCircle>
                            <img src="/reviews/3.jpg"></img>
                        </StyledCircle>{" "}
                        <StyledClient>אסף .ד. ראש העין</StyledClient>
                        <StyledComment invertedSide={!inverted}>
                            "..בזכותו חסכנו הרבה! התהליך איתו היה סופר קליל, מקצועי, ומהיר!
                            ממליצים בחום."
                        </StyledComment>
                    </StyledReview>
                </a>

                <a
                    href={
                        "https://www.facebook.com/permalink.php?story_fbid=4237047926358194&id=2177117312351276"
                    }
                >
                    <StyledReview>
                        <StyledCircle>
                            <img src="/reviews/4.jpg"></img>
                        </StyledCircle>{" "}
                        <StyledClient>גל .ר. חולון</StyledClient>
                        <StyledComment invertedSide={inverted}>
                            "..שי נלחם בשבילנו לאורך כל הדרך, עשה הרבה מעבר למה שהיה צריך ללא
                            ספק!! ..תמיכה מלאה למרות הקשיים שהתגלו בדרך."
                        </StyledComment>
                    </StyledReview>
                </a>

            </StyledFlex>
        </Flex>
    );
};




const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

interface StyledComment {
    invertedSide?: boolean;
}

const StyledComment = styled.div<StyledComment>`
  position: relative;
  background-color: #cff2ef;
  border-radius: 0.4em;
  padding: 8px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: ${({invertedSide}) => (invertedSide ? "80%" : "20%")};
    width: 0;
    height: 0;
    border: 21px solid transparent;
    border-top-color: #cff2ef;
    border-bottom: 0;
    border-right: 0;
    margin-left: -10.5px;
    margin-bottom: -21px;
  }
`;

const StyledCircle = styled.div`
  position: absolute;
  left: -10px;
  top: 0px;
  z-index: 100;
  width: 35px;
  height: 35px;
  background-color: #bbb;
  border-radius: 50%;
  overflow: hidden;

  display: inline-block;

  img {
    height: auto;
    width: 100%;
  }
`;

const StyledReview = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 480px;
  margin-bottom: 20px;
`;

const StyledClient = styled.div`
  font-weight: normal;
  margin-right: 20px;
`;

export default Reviews;
