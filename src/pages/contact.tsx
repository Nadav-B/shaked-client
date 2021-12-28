import React, { useState } from "react";
import Button from "../elements/Button";
import Text from "../elements/Text";
import styled from "styled-components";
import api from "../shared/api";

import Meta from "../components/Meta";
import Wrapper from "../elements/Wrapper";
import TextWrapper from "../elements/TextWrapper";

const seo = {
  description: "השאירו פרטים ונחזור אליכם בהקדם",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
};

enum FormularStyle {
  default = 0,
  compact= 1
};

const Contact:React.FC<{ disableMetadata:boolean }> = ({
  disableMetadata }) => {


  
  const [state, setState] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    address: "",
    category: "כללי",
  });

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const tags = [
    "כללי",
    "משכנתא חדשה",
    "בדיקת משכנתא קיימת",
    "מחזור משכנתא",
    "נפרדים מהמינוס",
  ];

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    await api.postContact(state).then(
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
    <Wrapper>
      {!disableMetadata && <Meta seo={seo} />}

      <h1>צרו קשר</h1>
      <TextWrapper>
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
              type="tel"
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

          <label>
            פנייה בנושא
            <StyledSelect
              name="category"
              value={state.category}
              onChange={handleChange}
            >
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </StyledSelect>
          </label>
          <Text variant={result.style}> {result.text}</Text>
          <Button disabled={result.status} type="submit">
            שלח
          </Button>
        </form>
      </TextWrapper>
    </Wrapper>
  );
};

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  margin: auto;
  margin-top: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &::placeholder {
    color:  ${(p) => p.theme.colors.dimGray};

  }
`;

export default Contact;
