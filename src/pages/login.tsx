import React, { useEffect, useState } from "react";
import Button from "../elements/Button";
import Text from "../elements/Text";
import styled from "@emotion/styled";
import Router from "next/router";
import Title from "../elements/Title";
import Flex from "../elements/Flex";
import { useLazyQuery } from "@apollo/client";
import query from "../graphql/IsAuthenticated.graphql";
import { IsAuthenticated } from "../graphql/__generated__/IsAuthenticated";

const LoginPage = () => {
  const [isAuthenticated, { data, loading, error }] =
    useLazyQuery<IsAuthenticated>(query);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  useEffect(() => {

    if(data?.isAuthenticated==true) {
      Router.push("/admin");
      console.log("here")
    }
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let buff = new Buffer(state.username + ":" + state.password);
    let base64data = buff.toString("base64");
    const token = "Basic " + base64data;
    localStorage.setItem("token", base64data);
    isAuthenticated();

    if (error) {
      localStorage.removeItem("token");
      console.log(error);
      result.text = error.message;
    }
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
    <Flex alignItems="center" margin="30px" flexDirection="column">
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

export default LoginPage;
