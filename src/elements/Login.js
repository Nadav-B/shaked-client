import React, { useState } from "react";
import Button from "./Button";
import Text from "./Text";
import styled from '@emotion/styled';
import Router from "next/router";
import Title from "./Title";
import Flex from "./Flex";

const Login = ({ login }) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(state.username, state.password).then(
      (response) => {
        if (response) {
          setResult((prevState) => ({
            ...prevState,
            text: "התחבר בהצלחה!",
            style: "sucess",
            status: true,
          }));
          Router.push("/admin");
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
      <Flex alignItems="center" margin="30px"  flexDirection="column">
      <Title> דף ניהול</Title>
        <form onSubmit={handleSubmit}>
          <label>
            שם משתמש
            <StyledInput
              name="username"
              value={state.username}
              placeholder="שדה חובה"
              onChange={handleChange}
              type="text"
              id="username"
              required
            />
          </label>
          <label>
            סיסמא
            <StyledInput
              name="password"
              id="password"
              value={state.password}
              placeholder="שדה חובה"
              onChange={handleChange}
              type="password"
              required
            />
          </label>
          <Text variant={result.style}> {result.text}</Text>
          <Button type="submit">שלח</Button>
        </form>
    </Flex>
  );
};



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

export default Login;
