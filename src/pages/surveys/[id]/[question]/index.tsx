import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Flex from "../../../../elements/Flex";
import Text from "../../../../elements/Text";
import Button from "../../../../elements/Button";
import surveys from "../../../../../public/surveys";
import { Progress } from "react-sweet-progress";
import Meta from "../../../../components/meta";
import Link from "next/link";
import Title from "../../../../elements/Title";
import Seo from "../../../../classes/seo";

const QuestionView = ({ id }) => {
  const selectedSurvey = surveys[Number(id)];
  const selectedSurveyCache = `survey_+ ${selectedSurvey.id}`;
  const router = useRouter();
  const index = Number(router.query["question"]);
  const [results, setResults] = useState(new Map<String, String>());
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const currentQuestion = selectedSurvey.questions[index].question;

  useEffect(() => {
    if (typeof window !== "undefined" && results.size == 0) {
      var temporal = localStorage.getItem(selectedSurveyCache);
      if (temporal == undefined) {
        setResults(new Map());
      } else {
        setResults(new Map(JSON.parse(temporal)));
      }
    }
  }, [results.size, selectedSurveyCache]);

  useEffect(() => {
    const cachedAnswer = results.get(currentQuestion);
    if (cachedAnswer != null) {
      if (cachedAnswer != null) {
        setSelectedAnswer(cachedAnswer.toLocaleString());
      }
    }
  }, [results, currentQuestion]);

  const seo = new Seo();
  seo.title = selectedSurvey.name;
  seo.description = "בצעו בדיקה חינם וגלו אם תוכלו להוזיל את עלויות המשכנתא";
  seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/surveys/${id}`;

  const handleAnswerSubmit = (event, answer) => {
    event.preventDefault();
    results.set(currentQuestion, answer);
    setResults(results);
    window.localStorage.setItem(
      selectedSurveyCache,
      JSON.stringify(Array.from(results.entries()))
    );

    if (index < selectedSurvey.questions.length - 1) {
      var path = `/surveys/${id}/${index + 1}`;
      router.push(path);
    }

    if (index == selectedSurvey.questions.length - 1) {
      var path = `/surveys/${id}/submit`;
      router.push(path);
    }
  };

  return (
    <Flex margin={15} alignItems={"center"} flexDirection={"column"}>
      <Title className="title">{selectedSurvey.name}</Title>

      <Meta seo={seo} />
      <Flex alignItems="center" flexDirection="column">
        <Text fontSize="large">
          שאלה {index + 1} מתוך {selectedSurvey.questions.length}
        </Text>
        <Progress
          theme={{
            active: {
              symbol: "‍",
              color: "#0a589d",
            },
          }}
          percent={(index / selectedSurvey.questions.length) * 100}
        />
        <Text fontSize="large"> {currentQuestion}</Text>

        <StyledAnswersWrapper>
          {selectedSurvey.questions[index].answers.map((answer, counter) => (
            <Button
              key={counter}
              active={answer == selectedAnswer}
              onClick={(event) => {
                handleAnswerSubmit(event, answer);
              }}
            >
              {answer}
            </Button>
          ))}
        </StyledAnswersWrapper>
        {index > 0 && (
          <Link passHref href={`/surveys/${selectedSurvey.id}/${index - 1}`}>
            <BackButtonWrapper>
              <Button type="submit">
                <img src="/assets/back.svg" alt=">" />
                <Text>לשאלה הקודמת</Text>
              </Button>
            </BackButtonWrapper>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};
const BackButtonWrapper = styled.div`
  width: 200px;
  img {
    display: inline;
    width: 20px;
    float: right;
  }
`;

const StyledAnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;

export async function getServerSideProps({ query }) {
  const id = query.id;
  return { props: { id } };
}

export default QuestionView;
