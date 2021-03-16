import React from "react";
import survey1 from "../../public/surveys/1.json";
import survey2 from "../../public/surveys/2.json";
import Link from "next/link";
import Text from "../../elements/Text";
import styled from "styled-components";

import Meta from "../../components/Meta";

const seo = {
  title: "שאלונים",
  description: "בצעו בדיקה חינם וגלו אם תוכלו להוזיל את עלויות המשכנתא",
  url: "https://www.shakedm.co.il/surveys",
};

const Surveys = ({ disableMetadata }) => {
  const data = [survey1, survey2];

  return (
    <div>
      {!disableMetadata && <Meta seo={seo} />}
      <h1>שאלונים לביצוע בדיקה</h1>
      <StyledContainer>
        {data.map((survey) => (
          <Link
            key={survey.id}
            passHref
            href="/surveys/[id]"
            as={`/surveys/${survey.id}`}
          >
            <a>
              <StyledButton>
                <Text margin={45} fontSize="large">
                  {survey.name}
                </Text>
              </StyledButton>
            </a>
          </Link>
        ))}
      </StyledContainer>
    </div>
  );
};
const StyledContainer = styled.div`
  margin: auto;
  padding-bottom: 40px;
`;

const StyledButton = styled.div`
  padding: 20px;
  cursor: pointer;
  width: 80%;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  text-align: center;
  margin: auto;
  margin-bottom: 20px;

  :hover {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
`;

export default Surveys;
