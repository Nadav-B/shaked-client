import React from "react";

import styled from "@emotion/styled";
import {useRouter} from "next/router";

const QuestionView = () => {
    const router = useRouter()
    console.log(router)
    const  questionIndex = router.query["question"];
    const  surveyId = router.query["id"];

    return (
        <div>  {surveyId}{questionIndex}</div>
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
