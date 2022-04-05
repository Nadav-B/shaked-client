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
    console.log(router)
    const index = Number(router.query["question"]);

    const surveyId = router.query["id"];
    const surveys = [survey1, survey2];
    const selectedSurvey = surveys[Number(surveyId)];

    const handleAnswerSubmit = (event, question, answer) => {
        event.preventDefault();
        results.set(question, answer);

        if (index < selectedSurvey.questions.length - 1) {
            console.log(router);
            var path = `/surveys/${surveyId}/${index+1}`;
            router.push(path);
        }

        if(index ==selectedSurvey.questions.length-1) {
            var path = `/surveys/${surveyId}`;
            router.push(path);
        }


    };



    const backQuestion = () => {
        //event.preventDefault();
        if (index > 0) {
            var path = `/surveys/${surveyId}/${index-1}`;
            router.push(path);
        }

    };


    const [results, setResults] = useState(new Map<String, String>());

    const isChoosen = (question, answer) => {
        if (results.get(question) === answer) return true;
        return false;
    };
    return (
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
                {" "}
                {selectedSurvey.questions[index].question}
            </Text>

            <StyledAnswersWrapper>
                {selectedSurvey.questions[index].answers.map((answer, counter) => (
                    <Button
                        key={counter}
                        active={isChoosen(
                            selectedSurvey.questions[index].question,
                            answer
                        )}
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
