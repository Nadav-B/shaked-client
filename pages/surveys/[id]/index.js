import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import survey1 from "../../../public/surveys/1.json";
import survey2 from "../../../public/surveys/2.json";
import Text from "../../../elements/Text";
import Title from "../../../elements/Title";
import Button from "../../../elements/Button";
import api from "../../../shared/api";
import { Progress } from "react-sweet-progress";

const Survey = ({ id }) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts/post`;

  const Status = {
    Fillname: 0,
    Questions: 1,
    CompleteContact: 2,
  };
  const surveys = [survey1, survey2];
  const data = surveys[id];

  const [results, setResults] = useState(new Map());

  const [currentStatus, setCurrentstatus] = useState(Status.Fillname);
  const [confirmation, setConfirmation] = useState({
    text: "",
    style: "",
    status: false,
  });

  const [contact, setContact] = useState({
    fullname: "",
    phonenumber: "",
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

  const parseAnswersForSubmit = () => {
    var tempArray = [];
    for (let [key, value] of results) {
      const answer = {
        question: key,
        answer: value,
      };
      tempArray.push(answer);
    }
    return tempArray;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const survey = {
      name: data.name,
      answers: parseAnswersForSubmit(),
    };

    const contactForm = {
      fullname: contact.fullname,
      phonenumber: contact.phonenumber,
      category: contact.category,
      survey: survey,
    };

    api.postContact(contactForm).then(
      (response) => {
        setConfirmation((prevState) => ({
          ...prevState,
          text: "נשלח בהצלחה!",
          style: "sucess",
          status: true,
        }));
      },
      (error) => {
        setConfirmation((prevState) => ({
          ...prevState,
          text: "שגיאה",
          style: "error",
          status: false,
        }));
      }
    );
  };

  const isChoosen = (question, answer) => {
    for (let [key, value] of results) {
      if (key == question && value === answer) return true;
    }
    return false;
  };

  const handleAnswerSubmit = (event, question, answer) => {
    event.preventDefault();
    results.set(question, answer);

    if (index < data.questions.length - 1) setIndex(index + 1);
    if (index == data.questions.length - 1)
      setCurrentstatus(Status.CompleteContact);
  };

  const backQuestion = () => {
    //event.preventDefault();
    if (index > 0) setIndex(index - 1);
  };

  const fillName = (event) => {
    event.preventDefault();
    setCurrentstatus(Status.Questions);
  };

  const fillPhone = (event) => {
    handleSubmit(event);
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.name}></meta>
        <meta property="og:title" content={data.name} key="ogtitle" />
        <meta property="og:description" content={data.name} key="ogdesc" />
        <title>{"shaked"}</title>
      </Head>
      <Title className="title">{data.name}</Title>

      {currentStatus == 0 && (
        <ContactWrapper>
          <Text variant="semiBold">מלאו את שמכם והתחילו את ביצוע הבדיקה:</Text>
          <form onSubmit={fillName}>
            <StyledInput
              name="fullname"
              value={contact.fullname}
              placeholder="שדה חובה"
              onChange={handleChange}
              required
            />{" "}
            <Button id="SurveysStarted" type="submit">
              התחל
            </Button>
          </form>
        </ContactWrapper>
      )}

      {currentStatus == 1 && (
        <div>
          <QuestionWrapper>
            <Text fontSize="large">
              שאלה {index} מתוך {data.questions.length}
            </Text>

            <Progress
              theme={{
                active: {
                  symbol: "‍",
                  color: "#0a589d",
                },
              }}
              percent={(index / data.questions.length) * 100}
            />
            <Text fontSize="large"> {data.questions[index].question}</Text>
          </QuestionWrapper>

          <StyledAnswersWrapper>
            {data.questions[index].answers.map((answer, counter) => (
              <Button
                key={counter}
                active={isChoosen(data.questions[index].question, answer)}
                onClick={(event) => {
                  handleAnswerSubmit(
                    event,
                    data.questions[index].question,
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
                לשאלה הקודמת
              </Button>
            </BackButtonWrapper>
          )}
        </div>
      )}
      {currentStatus == 2 && (
        <ContactWrapper>
          <Progress percent={100} />
          <Text>השאירו טלפון ונציג שלנו ייצור עמכם קשר להשלמת הבדיקה:</Text>
          <form id="submitSurveyForm" onSubmit={fillPhone}>
            <StyledInput
              name="phonenumber"
              value={contact.phonenumber}
              placeholder="שדה חובה"
              onChange={handleChange}
              type="tel"
              required
            />{" "}
            <Text variant={confirmation.style}> {confirmation.text}</Text>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
`;

const BackButtonWrapper = styled.div`
  max-width: 200px;
`;
const StyledAnswersWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 400px;
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

const QuestionWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  font-size: ${(p) => p.theme.fontSize.normal};

  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  bacgkround: silver;
  &::placeholder {
    color: black;
  }
`;

// This gets called on every request
export async function getServerSideProps({ query }) {
  const id = query.id;
  return { props: { id } };
}

export default Survey;
