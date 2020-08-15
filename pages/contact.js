import React, { useState } from "react";
import Button from "../elements/Button";
import Text from "../elements/Text";
import axios from "axios";
import styled from "styled-components";

const Contact = ({ onChange = () => {}, onKeyDown = () => {} }) => {
  const [state, setState] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    address: "",
  });

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts/insert`;

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

  return (
    <div>
      <h1>צור קשר</h1>
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <label>
            שם מלא
            <StyledInput
              name="fullname"
              value={state.fullname}
              placeholder="שדה חובה"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            מספר טלפון
            <StyledInput
              name="phonenumber"
              placeholder="שדה חובה"
              value={state.phonenumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            דוא״ל
            <StyledInput
              name="email"
              type="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
          <label>
            ישוב
            <StyledInput
              name="address"
              value={state.address}
              onChange={handleChange}
            />
          </label>
          <Text variant={result.style}> {result.text}</Text>
          <Button disabled={result.status} type="submit">
            שלח
          </Button>
        </form>
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.div`
  display: flex;
  max-width: 340px;
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

export default Contact;
