import React, { useEffect, useState } from "react";
import Button from "./Button";
import Router from "next/router";
import Input from "./Input";
import Flex from "./Flex";
import { Title, Text } from "./";
import { useAuth } from "../shared/auth";
import { useIsAuthenticatedLazyQuery } from "src/graphql/generated/graphql";
import Loading from "./Loading";

const Login = () => {
  const auth = useAuth();

  const [
    isAuthenticated,
    { data, loading, error },
  ] = useIsAuthenticatedLazyQuery();

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
    if (data?.isAuthenticated == true) {
      auth.login(state.username, state.password);
    }
  }, [auth, data, state.password, state.username]);

  const handleSubmit = (event) => {
    event.preventDefault();

    auth.login(state.username, state.password);

    isAuthenticated();

    if (data?.isAuthenticated == true) {
      Router.push("admin");
      console.log("push");
    }
    if (error) {
      auth.logout();
      console.log(error);
      result.text = error.message;
    }

    if (loading) {
      return Loading;
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
          <Input
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
          <Input
            name="password"
            id="password"
            value={state.password}
            placeholder="שדה חובה"
            onChange={handleChange}
            type="password"
            required
          />
        </label>
        <Text> {result.text}</Text>
        <Button type="submit">שלח</Button>
      </form>
    </Flex>
  );
};

export default Login;
