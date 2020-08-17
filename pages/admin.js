import React, { useState } from "react";
import Button from "../elements/Button";
import Text from "../elements/Text";
import axios from "axios";
import Head from "next/head";
import styled from "styled-components";

const Admin = () => {
  const [state, setState] = useState({
    username: "shai",
    password: "shai",
  });

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const url = `${process.env.NEXT_PUBLIC_API_URL}/admin`;

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginUrl = `${url}/login`;

    const auth = {
      username: state.username,
      password: state.password,
    };

    console.log(loginUrl, auth, state);
    axios.post(loginUrl, auth).then(
      (response) => {
        console.log(response);

        if (response.data) {
          setResult((prevState) => ({
            ...prevState,
            text: "התחבר בהצלחה!",
            style: "sucess",
            status: true,
          }));
        } else {


            setResult((prevState) => ({
                ...prevState,
                text: "שגיאה",
                style: "error",
                status: false,
              }));  
        }
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
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <label>
          שם משתמש
          <StyledInput
            name="username"
            value={state.username}
            placeholder="שדה חובה"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          סיסמא
          <StyledInput
            name="password"
            value={state.password}
            placeholder="שדה חובה"
            onChange={handleChange}
            required
          />
        </label>
        <Text variant={result.style}> {result.text}</Text>
        <Button type="submit">שלח</Button>
      </form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  display: flex;
  max-width: 340px;
  margin: auto;
  margin-top: 100px;
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

export default Admin;
