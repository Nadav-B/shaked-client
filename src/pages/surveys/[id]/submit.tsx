import { useEffect, useState } from "react";
import surveys from "../../../../public/surveys";
import styled from "@emotion/styled";
import { Progress } from "react-sweet-progress";
import { useRouter } from "next/router";
import {
  Flex,
  Text,
  Title,
  Input,
  Button,
  Error,
  ContactViewer,
} from "../../../elements";
import {
  AnswerInput,
  SurveyInput,
  useSaveContactMutation,
} from "src/graphql/generated/graphql";

const SurveySummary = ({ id }) => {
  useRouter();

  const selectedSurveyCache = `survey_+ ${id}`;
  const selectedSurvey = surveys[Number(id)];
  const [results, setResults] = useState(new Map<string, string>());
  const [submitContact, { data, loading, error }] = useSaveContactMutation();

  const [contact, setContact] = useState({
    fullName: "",
    phoneNumber: "",
    category: "שאלון",
  });

  useEffect(() => {
    if (typeof window !== "undefined" && results.size == 0 && data == null) {
      const temporal = localStorage.getItem(selectedSurveyCache);
      console.log(temporal);
      if (temporal != undefined) setResults(new Map(JSON.parse(temporal)));
    }
  }, [results.size, selectedSurveyCache, data]);

  const parseAnswersForSubmit = () => {
    const tempArray: AnswerInput[] = [];
    console.log(results);
    results.forEach((key, value) => {
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

    console.log(survey);
    submitContact({
      variables: {
        data: contactForm,
      },
    });

    clearSurvey();
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
    <Flex margin={15} alignItems="center" flexDirection="column">
      <Title className="title">{selectedSurvey.name}</Title>
      <div>
        <Progress percent={100} />
        <StatusWrapper>
          <Text>
            מלאו את שמכם וטלפון ונציגנו יצרו עמכם קשר להשלמת בדיקה ללא עלות
          </Text>
        </StatusWrapper>
        <form id="submitSurveyForm" onSubmit={handleSubmit}>
          <Flex flexDirection="column">
            <label>
              {contact.fullName !== "" && <Text size={"small"}>שם</Text>}
              <Input
                name="fullName"
                value={contact.fullName}
                placeholder="שם מלא"
                width="100%"
                type="text"
                onChange={handleChange}
                required
              />{" "}
            </label>
            <label>
              {contact.phoneNumber !== "" && <>טלפון</>}
              <Input
                name="phoneNumber"
                value={contact.phoneNumber}
                placeholder="טלפון"
                width="100%"
                onChange={handleChange}
                type="tel"
                required
              />{" "}
            </label>
            <Button id="submitSurvey" type="submit">
              שלח
            </Button>
          </Flex>
        </form>
      </div>
    </Flex>
  );
};

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
