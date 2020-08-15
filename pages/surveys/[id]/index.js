import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import styled from "styled-components";
import survey1 from "../../../public/surveys/1.json";
import survey2 from "../../../public/surveys/2.json";
import Text from "../../../elements/Text";
import Button from "../../../elements/Button";

const Survey = ({ id }) => {
  const Status = {
    Fillname: 0,
    Questions: 1,
    CompleteContact: 2,
  };

  const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts/insert`;

  const surveys = [survey1, survey2];
  const data = surveys[id];

  const [currentStatus, setCurrentstatus] = useState(Status.CompleteContact);

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const [state, setState] = useState({
    fullname: "",
    phonenumber: "",
  });

  const [index, setIndex] = useState(0);

  console.log(index);

  const handleSubmit = (event) => {
    event.preventDefault();

    const contact = {
      fullname: state.fullname,
      phonenumber: state.phonenumber,
      email: state.email,
      address: state.address,
    };

    axios
      .post(url, {
        contact,
      })
      .then(
        (response) => {
          setResult((prevState) => ({
            ...prevState,
            text: "נשלח בהצלחה!",
            style: "sucess",
            status: true,
          }));
        },
        (error) => {
          setResult((prevState) => ({
            ...prevState,
            text: "שגיאה",
            style: "error",
            status: false,
          }));
        }
      );
  };

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    if (index < data.questions.length - 1) setIndex(index + 1);
    if (index == data.questions.length - 1)
      setCurrentstatus(Status.CompleteContact);
  };

  const backQuestion = (event) => {
    event.preventDefault();
    if (index > 0) setIndex(index - 1);
  };

  const fillName = (event) => {
    event.preventDefault();
    setCurrentstatus(Status.Questions);
  };

  const fillPhone = (event) => {
    handleSubmit(event)

  };

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState((prevState) => ({
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
      <h1>{data.name}</h1>
      {currentStatus == 0 && (
        <div>
          <Text>מלאו את שמכם והתחילו את ביצוע הבדיקה:</Text>
          <form onSubmit={fillName}>
            <StyledInput
              name="fullname"
              value={state.fullname}
              placeholder="שדה חובה"
              onChange={handleChange}
              required
            />{" "}
            <Button type="submit">שלח</Button>
          </form>
        </div>
      )}

      {currentStatus == 1 && (
        <div>
          {data.questions[index].question}
          {data.questions[index].answers.map((answer) => (
            <StyledAnswersWrapper>
              <Button onClick={handleAnswerSubmit}>{answer}</Button>
            </StyledAnswersWrapper>
          ))}
          {index > 0 && (
            <Button onClick={backQuestion} type="submit">
              לשאלה הקודמת
            </Button>
          )}
        </div>
      )}
      {currentStatus == 2 && (
        <div>
          <Text>השאירו טלפון ונציג שלנו ייצור עמכם קשר להשלמת הבדיקה:</Text>
          <form onSubmit={fillPhone}>
            <StyledInput
              name="phonenumber"
              value={state.phonenumber}
              placeholder="שדה חובה"
              onChange={handleChange}
              type="tel"
              required
            />{" "}
            <Text variant={result.style}> {result.text}</Text>
            <Button disabled={result.status}  type="submit">שלח</Button>
          </form>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const StyledAnswersWrapper = styled.div`
  width: 50%;
  display: flex;
  margin: auto;
  margin-top: 20px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
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
