import React, { useState } from "react";
import styled from "@emotion/styled";
import Wrapper from "../elements/Wrapper";

import Flex from "../elements/Flex";

const Reviews: React.FC<{}> = ({}) => {
  return (
    <div>
      <h1> מה לקוחות אומרים עלינו?</h1>
      <StyledFlex

      >
        <StyledReview>
          <StyledComment>
            "..מתחילת הדרך הרגשנו שאנחנו בידיים טובות.. שי מאוד מקצועי, אמין,
            ואחראי. בלעדיו לא היינו שורדים את התהליך! .."
          </StyledComment>

          <StyledClient> לירן .מ. תל-אביב</StyledClient>

        </StyledReview>

        <StyledReview>
          <StyledComment>
            "..אין לתאר את ההקלה שמישהו אחר מטפל לך בתסבוכת הזו.. סופר מקצועי,
            עובד מכל הלב.. היה זמין עבורנו תמיד.. סמכנו עליו בעיניים עצומות!.."
          </StyledComment>
          <StyledClient> הדר .מ. חריש</StyledClient>

        </StyledReview>

        <StyledReview>
          <StyledComment>
            "..בזכותו חסכנו הרבה! התהליך איתו היה סופר קליל, מקצועי, ומהיר!
            ממליצים בחום."
          </StyledComment>
          <StyledClient>אסף .ד. ראש העין</StyledClient>

        </StyledReview>
        

        <StyledReview>
          <StyledComment> 
            
            "..שי נלחם בשבילנו לאורך כל הדרך, עשה הרבה מעבר למה שהיה צריך ללא
            ספק!! ..תמיכה מלאה למרות הקשיים שהתגלו בדרך."
          </StyledComment>
          <StyledClient>גל .ר. חולון</StyledClient>

        </StyledReview>

        <StyledReview>
          <div>
            "..לא מתפשר ולא נח עד להשגת היעד ללא פשרות, שבפועל תורגם לחסכון כספי
            ענק שלי. לא מובן למצוא אנשי מקצוע שנותנים לך שקט ועושים לך חיים קלים
            באחת ההחלטות הקריטיות בחיים... אתה פשוט איש טוב באמצע הדרך וכן יירבו
            כמוך."
          </div>
          <StyledClient>יעל .ב. מכמורת</StyledClient>

        </StyledReview>
      </StyledFlex>
    </div>
  );
};


const StyledFlex= styled.div`
display: flex;
flex-wrap: no-wrap;
overflow-x: auto;
margin: auto;
padding: 25px;
align-items: center;
justify-content: center;


@media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
  justify-content: flex-start;
}

`


const StyledReview = styled.div`
flex-basis: 250px;
box-shadow: 0 7px 70px rgb(5 3 44 / 8%);
flex-grow: 0;
flex-shrink: 0;
height: 310px;
margin: 15px;
text-align: center;
padding: 25px;
`;

const StyledComment = styled.div`
height: 150px;
margin-top:25px;
line-height: 1.5;
`


const StyledClient = styled.div`
margin: 20px;
font-weight: bold;

`

export default Reviews;
