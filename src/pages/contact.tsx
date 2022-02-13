import React, {useState} from "react";
import Button from "../elements/Button";
import Text from "../elements/Text";
import styled from "@emotion/styled";

import api from "../shared/api";

import Meta from "../components/Meta";
import Wrapper from "../elements/Wrapper";
import TextWrapper from "../elements/TextWrapper";
import Flex from "../elements/Flex";
import mutation from "../graphql/SaveContact.graphql";
import {useMutation} from "@apollo/client";
import {
    SaveContact,
    SaveContact_saveContact,
} from "../graphql/__generated__/SaveContact";
import {ContactInput} from "../graphql/__generated__/globalTypes";
import Title from "../elements/Title";

const seo = {
    description: "השאירו פרטים ונחזור אליכם בהקדם",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
};

interface ContactOptions {
    disableMetadata: boolean
    title?: string
    category?: string
}

const Contact: React.FC<ContactOptions> = ({
                                               disableMetadata,
                                               title = "צרו קשר",
                                               category = "כללי"
                                           }) => {
    const [state, setState] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        category: category,
    });

    const [submitContact, {data, loading, error}] = useMutation<{ SaveContact: SaveContact },
        { contactInput: ContactInput }>(mutation);

    const [result, setResult] = useState({
        text: "",
        style: "",
        status: false,
    });


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
                    fullName: state.fullName,
                    phoneNumber: state.phoneNumber,
                    email: state.email,
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
                    style: "success",
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
        <Flex flexDirection="column">
            {!disableMetadata && <Meta seo={seo}/>}
            <Title> {title} </Title>

            <form onSubmit={handleSubmit}>
                <Flex alignItems="center" flexDirection="column">
                    {state.fullName !== "" && <Text size={"small"}>שם</Text>}
                    <label>
                        <StyledInput
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
                        <StyledInput
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

                    <Text variant={result.style}> {result.text}</Text>

                    <StyledBox>
                        <Button disabled={result.status} type="submit">
                            שלח
                        </Button>
                    </StyledBox>
                </Flex>
            </form>
        </Flex>
    );
};


const StyledHeadline = styled.h1`
  font-weight: bold;
`;

const StyledBox = styled.div`
  width: 200px;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 30px;
  font-size: 16px;
  margin-top: 10px;
  border: 1px solid ${(p) => p.theme.colors.veryLightGrey};
  border-radius: 4px;
  box-sizing: border-box;
  background: ${(p) => p.theme.colors.veryLightGrey};

  &::placeholder {
    padding-right: 10px;
    color: ${(p) => p.theme.colors.black};

  }
`;

export default Contact;
