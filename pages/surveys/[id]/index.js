import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import styled from "styled-components";
import survey1 from "../../../public/surveys/1.json";
import survey2 from "../../../public/surveys/2.json";
import Text from "../../../elements/Text";
import Button from "../../../elements/Button";

const Survey = ({ id }) => {
  var data = [survey1, survey2];
  data = data[id];

  const Status = {
    Fillname: 0,
    Questions: 1,
    FillContact: 2,
    Sent: 3,
  };

  const [state, setState] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    address: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = [];

    const contact = {
      fullname: state.fullname,
      phonenumber: state.phonenumber,
      email: state.email,
      address: state.address,
    };
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

  const [currentStatus, setCurrentstatus] = useState(Status.Fillname);
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
          <form onSubmit={handleSubmit}>
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

      {currentStatus == 1 && <div></div>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
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
