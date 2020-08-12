import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../elements/Button";
import Input from "../elements/Input";
import axios from "axios";

const Contact = ({ onChange = () => {}, onKeyDown = () => {} }) => {
  const [state, setState] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    address: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
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

    console.log(contact)
    const url = "https://shakedm.co.il/api/contacts/insert";
    axios.post(url, {
      contact,
    });
  };

  return (
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
        <Button type="submit">שלח </Button>
      </form>
    </StyledForm>
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
