import Flex from "../../../elements/Flex";
import Text from "../../../elements/Text";
import Button from "../../../elements/Button";
import { useEffect, useState } from "react";
import surveys from "../../../../public/surveys";
import styled from "@emotion/styled";

import { Progress } from "react-sweet-progress";
import Loading from "../../../elements/Loading";
import { useRouter } from "next/router";
import Title from "../../../elements/Title";
import {
  AnswerInput,
  InputMaybe,
  SurveyInput,
  useSaveContactMutation,
} from "src/graphql/generated/graphql";

const SurveySummary = ({ id }) => {
  useRouter();
  const selectedSurveyCache = `survey_+ ${id}`;
  const selectedSurvey = surveys[Number(id)];
  const [results, setResults] = useState(new Map<string, string>());
  const [submitContact, { data, loading, error }] = useSaveContactMutation();

  const [confirmation, setConfirmation] = useState({
    text: "",
    style: "",
    status: false,
  });

  const [contact, setContact] = useState({
    fullName: "",
    phoneNumber: "",
    category: "שאלון",
  });

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      results.size == 0 &&
      confirmation.status != false
    ) {
      const temporal = localStorage.getItem(selectedSurveyCache);
      if (temporal != null) setResults(new Map(JSON.parse(temporal)));
    }
  }, []);

  const parseAnswersForSubmit = () => {
    const tempArray: AnswerInput[] = [];
    results.forEach((key, value) => {
      const answer = {
        question: value,
        answer: key,
      };
      ``;

      tempArray.push({ question: value, answer: key });
    });

    return tempArray;
  };

  const handleChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const value = target.value;
    const name = target.name;

    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearSurvey = () => {
    results.clear();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const survey: SurveyInput = {
      name: selectedSurvey.name,
      answers: parseAnswersForSubmit(),
    };

    const contactForm = {
      fullName: contact.fullName,
      phoneNumber: contact.phoneNumber,
      category: contact.category,
      survey: survey,
    };

    submitContact({
      variables: {
        data: contactForm,
      },
    })
      .then(
        (response) => {
          setConfirmation((prevState) => ({
            ...prevState,
            text: "פרטייך נשלחו בהצלחה, ניצור קשר בהקדם ",
            style: "green",
            status: true,
          }));
        },
        (error) => {
          setConfirmation((prevState) => ({
            ...prevState,
            text: "מצטערים אך חלה שגיאה בשליחת השאלון ניתן לפנות בפרטים המופעים בתחתית העמוד",
            style: "red",
            status: false,
          }));
        }
      )
      .catch((reason) => {
        setConfirmation((prevState) => ({
          ...prevState,
          text: "מצטערים אך חלה שגיאה בשליחת השאלון ניתן לפנות בפרטים המופעים בתחתית העמוד",
          style: "red",
          status: false,
        }));
      });

    clearSurvey();
  };

  return (
    <Flex margin={15} alignItems="center" flexDirection="column">
      <Title className="title">
        {selectedSurvey.name} {confirmation.status}
      </Title>
      {confirmation.status == null && (
        <div>
          <Progress percent={100} />
          <StatusWrapper>
            <Text variant="semiBold">
              מלאו את שמכם וטלפון ונציגנו יצרו עמכם קשר להשלמת בדיקה ללא עלות
            </Text>
          </StatusWrapper>
          <form id="submitSurveyForm" onSubmit={handleSubmit}>
            <Flex flexDirection="column">
              <label>
                {contact.fullName !== "" && <Text size={"small"}>שם</Text>}
                <StyledInput
                  name="fullName"
                  value={contact.fullName}
                  placeholder="שם מלא"
                  type="text"
                  onChange={handleChange}
                  required
                />{" "}
              </label>
              <label>
                {contact.phoneNumber !== "" && <>טלפון</>}
                <StyledInput
                  name="phoneNumber"
                  value={contact.phoneNumber}
                  placeholder="טלפון"
                  onChange={handleChange}
                  type="tel"
                  required
                />{" "}
              </label>
              <Button
                id="submitSurvey"
                disabled={confirmation.status}
                type="submit"
              >
                שלח
              </Button>
            </Flex>
          </form>
        </div>
      )}

      {confirmation.status != null && (
        <ConfirmationComponent confirmation={confirmation} />
      )}
    </Flex>
  );
};

const ConfirmationComponent = ({ confirmation }) => {
  return (
    <StatusWrapper>
      {confirmation.status == null && (
        <div>
          <Loading />
          <Text>שולח פרטים</Text>
        </div>
      )}
      <Text color={confirmation.style}>{confirmation.text}</Text>
    </StatusWrapper>
  );
};

const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
`;

export async function getServerSideProps({ query }) {
  const id = query.id;
  return { props: { id } };
}

const StatusWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

export default SurveySummary;
