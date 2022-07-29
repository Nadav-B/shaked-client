import React, { useState } from "react";
import {
  Button,
  ContactViewer,
  Input,
  Error,
  Title,
  Text,
  Flex,
} from "../elements";
import styled from "@emotion/styled";

import Seo from "../classes/seo";
import { useSaveContactMutation } from "../graphql/generated/graphql";

const seo = new Seo();
seo.description = "השאירו פרטים ונחזור אליכם בהקדם";
seo.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`;

interface ContactOptions {
  disableMetadata: boolean;
  title?: string;
  category?: string;
}

const Contact: React.FC<ContactOptions> = ({
  disableMetadata,
  title = "צרו קשר",
  category = "כללי",
}) => {
  const [state, setState] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    category: category,
  });

  const [submitContact, { data, loading, error }] = useSaveContactMutation();

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
        data: {
          fullName: state.fullName,
          phoneNumber: state.phoneNumber,
          email: state.email,
          address: state.address,
          category: state.category,
        },
      },
    });
  };

  if (error) {
    return (
      <Error
        description={"ארעה שגיאה בשליחת הפרטים "}
        optional={"באפשרותך ליצור קשר בפרטי התקשורת שבתחתית העמוד"}
      />
    );
  }
  if (data) {
    return <ContactViewer />;
  }

  return (
    <Flex flexDirection="column">
      <Title textAlign="center"> {title} </Title>

      <form onSubmit={handleSubmit}>
        <Flex alignItems="center" flexDirection="column">
          {state.fullName !== "" && <Text size={"small"}>שם</Text>}
          <label>
            <Input
              title="שם"
              name="fullName"
              value={state.fullName}
              placeholder="שם"
              onChange={handleChange}
              required
            />
          </label>
          {state.phoneNumber !== "" && <>טלפון</>}

          <label>
            <Input
              name="phoneNumber"
              placeholder="מספר טלפון"
              value={state.phoneNumber}
              onChange={handleChange}
              maxLength={11}
              type="tel"
              title="טלפון"
              required
            />
          </label>

          <StyledBox>
            <Button id={category} type="submit">
              שלח
            </Button>
          </StyledBox>
        </Flex>
      </form>
    </Flex>
  );
};

const StyledBox = styled.div`
  width: 200px;
`;

export default Contact;
