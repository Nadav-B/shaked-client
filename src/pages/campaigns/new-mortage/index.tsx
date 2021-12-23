import React, { useState } from "react";

import Meta from "../../../components/Meta";
import Wrapper from "../../../elements/Wrapper";
import TextWrapper from "../../../elements/TextWrapper";
import Flex from "../../../elements/Flex";

import Services from "../../services";
import Contact from "../../contact";
import Reviews from "../../../components/reviews";
const seo = {
  description: "השאירו פרטים ונחזור אליכם בהקדם",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
};

const NewMortage: React.FC = ({}) => {
  return (
    <Wrapper>
      <Flex flexDirection="column">
        <div>מחיר סוף שנה לליווי למשכנתא חדשה 6,500 ₪ במקום 7,900 ₪</div>
        <Contact disableMetadata={true}></Contact>

        <div>
          התאמת משכנתא אישית בהתאם לצרכים שלכם מכרז בין הבנקים והשגת התנאים
          האולטימטיביים עבורכם ליווי מלא לאורך כל התהליך מקצועיות, אמינות,
          זמינות והרבה סבלנות..
        </div>
        <h1> מי אנחנו?</h1>

        <div>
          שקד משכנתאות - הינו משרד קטן ואישי הכולל יועצים מהמובילים בשוק
          המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת
          הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם לאורך כל הדרך, באופן מקצועי
          והכי אישי שיש.
        </div>

        <Reviews></Reviews>

        <Services disableMetadata={true} />
      </Flex>
    </Wrapper>
  );
};

export default NewMortage;
