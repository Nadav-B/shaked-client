import React, { useEffect, useState } from "react";

import styled from '@emotion/styled';
import survey1 from "../../../../public/surveys/1.json";
import survey2 from "../../../../public/surveys/2.json";
import Text from "../../../elements/Text";
import Button from "../../../elements/Button";
import api from "../../../shared/api";
import { Progress } from "react-sweet-progress";
import mutation from "../../../graphql/SaveContact.graphql";

import Loading from "../../../elements/Loading";
import Meta from "../../../components/Meta";
import Wrapper from "../../../elements/Wrapper";
import { useMutation } from "@apollo/client";
import { SaveContact } from "../../../graphql/__generated__/SaveContact";
import {
  ContactInput,
  SurveyInput,
} from "../../../graphql/__generated__/globalTypes";

const Survey = ({ id }) => {
  const Status = {
    Questions: 1,
    CompleteContact: 2,
    statusContact: 3,
  };
  const surveys = [survey1, survey2];
  const selectedSurvey = surveys[id];

  const seo = {
    title: selectedSurvey.name,
    description: "בצעו בדיקה חינם וגלו אם תוכלו להוזיל את עלויות המשכנתא",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/surveys/${id}`,
  };

  const [results, setResults] = useState(new Map<String, String>());

  const [currentStatus, setCurrentstatus] = useState(Status.Questions);
  const [confirmation, setConfirmation] = useState({
    text: "",
    style: "",
    status: null,
  });

  const [contact, setContact] = useState({
    fullName: "",
    phoneNumber: "",
    category: "שאלון",
  });

  useEffect(function mount() {
    // cancel back button.
    if (Status.Questions === currentStatus) {
      history.pushState(null, document.title, location.href);
      window.addEventListener("popstate", function (event) {
        if (currentStatus === Status.Questions) {
          history.pushState(null, document.title, location.href);
          backQuestion();
        }
      });
    }
  });

  const [index, setIndex] = useState(0);

  const [submitContact, { data, loading, error }] = useMutation<
    { SaveContact: SaveContact },
    { contactInput: ContactInput },
    { surveyInput: SurveyInput }
  >(mutation);

  const parseAnswersForSubmit = () => {
    var tempArray = [];

    results.forEach((key, value) => {
      const answer = {
        question: key,
        answer: value,
      };
      tempArray.push(answer);
    });

    return tempArray;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentstatus(Status.statusContact);

    const survey: SurveyInput = {
      name: selectedSurvey.name,
      answers: parseAnswersForSubmit(),
    };

    const contactForm = {
      fullName: contact.fullName,
      phoneNumber: contact.phoneNumber,
      category: contact.category,
      survey: survey,
    };

    submitContact({
      variables: {
        contactInput: contactForm,
      },
    }).then(
      (response) => {
        setConfirmation((prevState) => ({
          ...prevState,
          text: "פרטייך נשלחו בהצלחה, ניצור קשר בהקדם ",
          style: "sucess",
          status: true,
        }));
      },
      (error) => {
        setConfirmation((prevState) => ({
          ...prevState,
          text: "מצטערים אך חלה שגיאה בשליחת השאלון ניתן לפנות בפרטים המופעים בתחתית העמוד",
          style: "error",
          status: false,
        }));
      }
    );
  };

  const isChoosen = (question, answer) => {

    if (results.get(question) === answer) return true;
    return false;
  };

  const handleAnswerSubmit = (event, question, answer) => {
    event.preventDefault();
    results.set(question, answer);

    if (index < selectedSurvey.questions.length - 1) setIndex(index + 1);
    if (index == selectedSurvey.questions.length - 1)
      setCurrentstatus(Status.CompleteContact);
  };

  const backQuestion = () => {
    //event.preventDefault();
    if (index > 0) setIndex(index - 1);
  };

  const handleChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const value = target.value;
    const name = target.name;

    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Wrapper>
      <Meta seo={seo} />
      <h1 className="title">{selectedSurvey.name}</h1>
      {currentStatus == 1 && (
        <div>
          <QuestionWrapper>
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
          </QuestionWrapper>

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
                <img src="/assets/back.svg" alt=">" />
                <Text>לשאלה הקודמת</Text>
              </Button>
            </BackButtonWrapper>
          )}
        </div>
      )}
      {currentStatus == 2 && (
        <ContactWrapper>
          <Progress percent={100} />

          <Text variant="semiBold">
            מלאו את שמכם וטלפון ונציגנו יצרו עמכם קשר להשלמת בדיקה ללא עלות
          </Text>

          <form id="submitSurveyForm" onSubmit={handleSubmit}>
            <StyledInput
              name="fullName"
              value={contact.fullName}
              placeholder="שם מלא"
              type="text"
              onChange={handleChange}
              required
            />{" "}
            <StyledInput
              name="phoneNumber"
              value={contact.phoneNumber}
              placeholder="טלפון"
              onChange={handleChange}
              type="tel"
              required
            />{" "}
            <Button
              id="submitSurvey"
              disabled={confirmation.status}
              type="submit"
            >
              שלח
            </Button>
          </form>
        </ContactWrapper>
      )}

      {currentStatus == 3 && (
        <StatusWrapper>
          {confirmation.status == null && (
            <div>
              <Loading />
              <Text>שולח פרטים</Text>
            </div>
          )}

          <Text variant={confirmation.style}>{confirmation.text}</Text>
        </StatusWrapper>
      )}
    </Wrapper>
  );
};

const BackButtonWrapper = styled.div`
  max-width: 200px;

  img {
    display: inline;
    width: 20px;
    float: right;
  }
`;
const StyledAnswersWrapper = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  margin-top: 25px;
`;

const ContactWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

const StatusWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

const QuestionWrapper = styled.div`
  display: block;
  width: auto;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;
const StyledInput = styled.input`
  width: 100%;

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
export async function getServerSideProps({ query }) {
  const id = query.id;
  return { props: { id } };
}

export default Survey;
