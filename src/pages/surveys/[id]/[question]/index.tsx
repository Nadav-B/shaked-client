import React, {useState} from "react";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import Flex from "../../../../elements/Flex";
import Text from "../../../../elements/Text";
import Button from "../../../../elements/Button";
import surveys from "../../../../../public/surveys";
import {Progress} from "react-sweet-progress";
import Meta from "../../../../components/Meta";
import TextWrapper from "../../../../elements/TextWrapper";
import Loading from "../../../../elements/Loading";
import {ContactInput, SurveyInput} from "../../../../graphql/__generated__/globalTypes";
import {useMutation} from "@apollo/client";
import mutation from "../../../../graphql/CreateContact.graphql";
import {CreateContact} from "../../../../graphql/__generated__/CreateContact";

const QuestionView = ({id}) => {

    const Status = {
        Questions: 1,
        CompleteContact: 2,
        statusContact: 3,
    };

    const [currentStatus, setCurrentStatus] = useState(Status.Questions);
    const router = useRouter()
    const index = Number(router.query["question"]);

    const selectedSurvey = surveys[Number(id)];
    const [results, setResults] = useState(new Map<String, String>());
    const currentQuestion = selectedSurvey.questions[index].question;


    const [submitContact, {data, loading, error}] = useMutation<{ CreateContact: CreateContact },
        { contactInput: ContactInput },
        { surveyInput: SurveyInput }>(mutation);

    console.log(results)
    const saveSurvey = (results) => {
        window.localStorage.setItem("results", JSON.stringify(Array.from(results.entries())));
    }
    const [confirmation, setConfirmation] = useState({
        text: "",
        style: "",
        status: null,
    });

    const [contact, setContact] = useState({
        fullName: "",
        phoneNumber: "",
        category: "שאלון",
    });

    const parseAnswersForSubmit = () => {
        var tempArray = [];

        results.forEach((key, value) => {
            const answer = {
                question: key,
                answer: value,
            };
            tempArray.push(answer);
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
    const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentStatus(Status.statusContact);

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
                contactInput: contactForm,
            },
        }).then(
            (response) => {
                setConfirmation((prevState) => ({
                    ...prevState,
                    text: "פרטייך נשלחו בהצלחה, ניצור קשר בהקדם ",
                    style: "success",
                    status: true,
                }));
            },
            (error) => {
                setConfirmation((prevState) => ({
                    ...prevState,
                    text: "מצטערים אך חלה שגיאה בשליחת השאלון ניתן לפנות בפרטים המופעים בתחתית העמוד",
                    style: "error",
                    status: false,
                }));
            }
        );
    };


    const seo = {
        title: selectedSurvey.name,
        description: "בצעו בדיקה חינם וגלו אם תוכלו להוזיל את עלויות המשכנתא",
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/surveys/${id}`,
    };


    const getSurvey = () => {
        if (typeof window !== "undefined") {
            var temporal = window.localStorage.getItem("results");
            setResults(new Map(JSON.parse(temporal)))
        }
    }

    if (results.size == 0) {
        getSurvey();
    }


    const handleAnswerSubmit = (event, question, answer) => {
        event.preventDefault();
        results.set(question, answer);

        saveSurvey(results);
        if (index < selectedSurvey.questions.length - 1) {
            console.log(router);
            var path = `/surveys/${id}/${index + 1}`;
            router.push(path);
        }

        if (index == selectedSurvey.questions.length - 1) {
            setCurrentStatus(Status.CompleteContact);
        }


    };


    const backQuestion = () => {
        //event.preventDefault();
        if (index > 0) {
            var path = `/surveys/${id}/${index - 1}`;
            router.push(path);
        }

    };

    return (
        <Flex alignItems={"center"} flexDirection={"column"}>
            <Meta seo={seo}/>
            <h1 className="title">{selectedSurvey.name}</h1>
            {currentStatus == 1 && (
                <Flex margin="30px" alignItems="center" flexDirection="column">
                    <Text fontSize="large">
                        שאלה {index + 1} מתוך {selectedSurvey.questions.length}
                    </Text>
                    <Progress
                        theme={{
                            active: {
                                symbol: "‍",
                                color: "#0a589d",
                            },
                        }}
                        percent={(index / selectedSurvey.questions.length) * 100}
                    />
                    <Text fontSize="large">
                        {" "}
                        {currentQuestion}
                    </Text>

                    <StyledAnswersWrapper>
                        {selectedSurvey.questions[index].answers.map((answer, counter) => (
                            <Button
                                key={counter}
                                active={results.get(currentQuestion) == answer}
                                onClick={(event) => {
                                    handleAnswerSubmit(
                                        event,
                                        currentQuestion,
                                        answer
                                    );
                                }}
                            >
                                {answer}
                            </Button>
                        ))}
                    </StyledAnswersWrapper>
                    {index > 0 && (
                        <BackButtonWrapper>
                            <Button onClick={backQuestion} type="submit">
                                <img src="/assets/back.svg" alt=">"/>
                                <Text>לשאלה הקודמת</Text>
                            </Button>
                        </BackButtonWrapper>
                    )}
                </Flex>
            )}
            {currentStatus == 2 && (
                <Flex margin="30px" alignItems="center" flexDirection="column">
                    <Progress percent={100}/>
                    <StatusWrapper>
                        <Text variant="semiBold">
                            מלאו את שמכם וטלפון ונציגנו יצרו עמכם קשר להשלמת בדיקה ללא עלות
                        </Text>
                    </StatusWrapper>

                    <TextWrapper>
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
                    </TextWrapper>
                </Flex>
            )}

            {currentStatus == 3 && (
                <StatusWrapper>
                    {confirmation.status == null && (
                        <div>
                            <Loading/>
                            <Text>שולח פרטים</Text>
                        </div>
                    )}

                    <Text variant={confirmation.style}>{confirmation.text}</Text>
                </StatusWrapper>
            )}
        </Flex>
    );
}
const BackButtonWrapper = styled.div`
  width: 200px;
  img {
    display: inline;
    width: 20px;
    float: right;
  }
`;

const StyledAnswersWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;

const StatusWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size:16px; 
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

// This gets called on every request
export async function getServerSideProps({query}) {
    const id = query.id;
    return {props: {id}};
}

export default QuestionView;
