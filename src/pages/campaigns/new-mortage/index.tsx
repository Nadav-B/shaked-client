import React, { useState } from "react";

import Meta from "../../../components/Meta";
import Wrapper from "../../../elements/Wrapper";
import TextWrapper from "../../../elements/TextWrapper";
import Flex from "../../../elements/Flex";


import Services from "../../services";
import Contact from "../../contact";
const seo = {
  description: "השאירו פרטים ונחזור אליכם בהקדם",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
};

const NewMortage: React.FC = ({}) => {
  return (
    <Wrapper>

      <Contact>


      </Contact>
      <h1> מי אנחנו?</h1>
      <Flex>
        <div>
          שקד משכנתאות - הינו משרד קטן ואישי הכולל יועצים מהמובילים בשוק
          המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת
          הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם לאורך כל הדרך, באופן מקצועי
          והכי אישי שיש.
        </div>
      </Flex>
      <Services disableMetadata={true} />
    </Wrapper>
  );
};

export default NewMortage;
