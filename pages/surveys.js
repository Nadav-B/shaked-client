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
  width: 80%;
  padding-top: 20px;
`;

const StyledButtom = styled.div`
  padding: 20px;
  cursor: pointer;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
  background-blend-mode: multiply, multiply;
  border-top-left-radius: 44px;
  border-bottom-right-radius: 44px;
  text-align: center;
  max-width: 400px;
  margin: 25px;
  color: white;


  :hover {
    background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);`;

export default Surveys;
