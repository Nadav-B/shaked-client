import React, {useState} from "react";

import styled from "@emotion/styled";
import {useRouter} from "next/router";
import Flex from "../../../../elements/Flex";
import Text from "../../../../elements/Text";
import Button from "../../../../elements/Button";
import survey1 from "../../../../../public/surveys/1.json";
import survey2 from "../../../../../public/surveys/2.json";
import {Progress} from "react-sweet-progress";

const QuestionView = () => {
    const router = useRouter()
    const index = Number(router.query["question"]);

    const surveyId = router.query["id"];
    const surveys = [survey1, survey2];
    const selectedSurvey = surveys[Number(surveyId)];
    const [results, setResults] = useState(new Map<String, String>());

    const question = selectedSurvey.questions[index].question;
    console.log(results)
    const saveSurvey = (results) => {
        window.localStorage.setItem("results", JSON.stringify(Array.from(results.entries())));
    }


    const getSurvey = () => {
        if (typeof window !== "undefined") {
            var temporal = window.localStorage.getItem("results");
            setResults(new Map(JSON.parse(temporal)))
        }
    }

    if (results.size == 0) {
        getSurvey();
    }


    const handleAnswerSubmit = (event, question, answer) => {
        event.preventDefault();
        results.set(question, answer);

        saveSurvey(results);
        if (index < selectedSurvey.questions.length - 1) {
            console.log(router);
            var path = `/surveys/${surveyId}/${index + 1}`;
            router.push(path);
        }

        if (index == selectedSurvey.questions.length - 1) {
            var path = `/surveys/${surveyId}`;
            router.push(path);
        }


    };


    const backQuestion = () => {
        //event.preventDefault();
        if (index > 0) {
            var path = `/surveys/${surveyId}/${index - 1}`;
            router.push(path);
        }

    };

    return (
        <Flex alignItems={"center"} flexDirection={"column"}>

            <Flex margin="30px" alignItems="center" flexDirection="column">
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
                <Text fontSize="large">
                    {question}
                </Text>

                <StyledAnswersWrapper>
                    {selectedSurvey.questions[index].answers.map((answer, counter) => (
                        <Button
                            key={counter}
                            active={results.get(question) === answer}

                            onClick={(event) => {
                                handleAnswerSubmit(
                                    event,
                                    selectedSurvey.questions[index].question,
                                    answer
                                );
                            }}
                        >
                            {answer}
                        </Button>
                    ))}
                </StyledAnswersWrapper>
                {index > 0 && (
                    <BackButtonWrapper>

                        <Button onClick={backQuestion} type="submit">
                            <img src="/assets/back.svg" alt=">"/>
                            <Text>לשאלה הקודמת</Text>
                        </Button>
                    </BackButtonWrapper>
                )}
            </Flex>
        </Flex>

    );

}
const BackButtonWrapper = styled.div`
  width: 200px;
  img {
    display: inline;
    width: 20px;
    float: right;
  }
`;

const StyledAnswersWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;

const StatusWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size:16px; 
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid ${(p) => p.theme.colors.veryLightGrey};
  border-radius: 4px;
  box-sizing: border-box;
  background: ${(p) => p.theme.colors.veryLightGrey};
  &::placeholder {
    color: ${(p) => p.theme.colors.black};
  }
`;

// This gets called on every request
export async function getServerSideProps({query}) {
    const id = query.id;
    return {props: {id}};
}

export default QuestionView;
