import React, { useState } from "react";
import Button from "../elements/Button";
import Text from "../elements/Text";
import styled from "styled-components";
import api from "../shared/api";

import Meta from "../components/Meta";
import Wrapper from "../elements/Wrapper";
import TextWrapper from "../elements/TextWrapper";
import Flex from "../elements/Flex";
import mutation from "../graphql/SaveContact.graphql";
import { useMutation } from "@apollo/client";
import {
  SaveContact,
  SaveContact_saveContact,
} from "../graphql/__generated__/SaveContact";
import { ContactInput } from "../graphql/__generated__/globalTypes";

const seo = {
  description: "השאירו פרטים ונחזור אליכם בהקדם",
  url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
};

enum FormularStyle {
  default = 0,
  compact = 1,
}

const Contact: React.FC<{ disableMetadata: boolean }> = ({
  disableMetadata,
}) => {
  const [state, setState] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    address: "",
    category: "כללי",
  });

  const [submitContact, { data, loading, error }] = useMutation<
    { SaveContact: SaveContact },
    { contactInput: ContactInput }
  >(mutation);

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


    submitContact({
      variables: {
        contactInput: {
          fullName: state.fullname,
          phoneNumber: state.phonenumber,
          email:state.email,
          address: state.address,
          category: state.category,
          comment: "",
        },
      },
    }).then(
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
          <Flex flexDirection="column">
            {state.fullname !== "" && <Text size={"small"}>שם</Text>}
            <label>
              <StyledInput
                title="שם"
                name="fullname"
                value={state.fullname}
                placeholder="שם"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              {state.phonenumber !== "" && <>טלפון</>}
              <StyledInput
                name="phonenumber"
                placeholder="מספר טלפון "
                value={state.phonenumber}
                onChange={handleChange}
                maxLength={11}
                type="tel"
                title="טלפון"
                required
              />
            </label>

            {/* 



          
          <label>
            <StyledInput
              name="email"
              type="email"
              placeholder="דוא״ל"
              value={state.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <StyledInput
              name="address"
              value={state.address}
              placeholder="ישוב"
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

          */}
            <Text variant={result.style}> {result.text}</Text>
            <Button disabled={result.status} type="submit">
              שלח
            </Button>
          </Flex>
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
  border: 1px solid ${(p) => p.theme.colors.veryLightGrey};
  border-radius: 4px;
  box-sizing: border-box;
  background: ${(p) => p.theme.colors.veryLightGrey};
  &::placeholder {
    color: ${(p) => p.theme.colors.black};
  }
`;

export default Contact;
