import React from "react";
import survey1 from "../public/surveys/1.json";
import survey2 from "../public/surveys/2.json";
import Link from "next/link";
import Text from "../elements/Text";
import styled from "styled-components";

const Surveys = () => {
  const data = [survey1, survey2];

  return (
    <div>
      <h1> שאלונים לביצוע בדיקה</h1>
      <StyledContainer>
        {data.map((survey) => (
          <Link
            key={survey.id}
            passHref
            href="/surveys/[id]"
            as={`/surveys/${survey.id}`}
          >
            <StyledButtom>
              <Text margin={45} fontSize="large">
                {survey.name}
              </Text>
            </StyledButtom>
          </Link>
        ))}
      </StyledContainer>
    </div>
  );
};
const StyledContainer = styled.div`
  margin: auto;
  width: 50%;
  padding-top: 20px;
  
`;

const StyledButtom = styled.div`
  padding: 20px;
  cursor: pointer;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  text-align: center;
  max-width: 400px;
  margin: 25px;

  :hover {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

  }
`;

export default Surveys;
