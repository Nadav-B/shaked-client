import React from "react";
import survey1 from "../../../public/surveys/1.json";
import survey2 from "../../../public/surveys/2.json";
import Link from "next/link";
import Text from "../../elements/Text";
import styled from '@emotion/styled';

import Meta from "../../components/Meta";
import Wrapper from "../../elements/Wrapper";
import Titel from "../../elements/Title";

const seo = {
  title: "שאלונים",
  description: "בצעו בדיקה חינם וגלו אם תוכלו להוזיל את עלויות המשכנתא",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/surveys`,
};

const Surveys = ({ disableMetadata }) => {
  const data = [survey1, survey2];

  return (
    <Wrapper>
      {!disableMetadata && <Meta seo={seo} />}
      <Titel>שאלונים לביצוע בדיקה</Titel>
      {data.map((survey) => (
          <Link
            key={survey.name}
            passHref
            href="/surveys/[id]"
            as={`/surveys/${survey.id}`}
          >
            <a>
              <StyledButton id="surveySelected">
                <Text margin={45} fontSize="large">
                  {survey.name}
                </Text>
              </StyledButton>
            </a>
          </Link>
      ))}
    </Wrapper>
  );
};

const StyledButton = styled.div`
  padding: 20px;
  border-radius: ${(p) => p.theme.border}px;
  cursor: pointer;
  width: 80%;
  max-width: 300px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  text-align: center;
  margin: auto;
  margin-top: 20px;


  :hover {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
`;

export default Surveys;
