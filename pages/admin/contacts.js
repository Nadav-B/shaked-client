import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import api from "../../shared/api";
import Text from "../../elements/Text";
import Button from "../../elements/Button";
import Loading from "../../elements/Loading";
import Modal from "../../elements/Modal";
import TextWrapper from "../../elements/TextWrapper";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Chartkick,{ ColumnChart, PieChart } from "react-chartkick";
import "chart.js";
import { ProtectRoute } from "../../shared/protected_route";


const ContactManagers = () => {
  Chartkick.options = {
    colors: ["#F77F00", "#FCBF49"]
  }
  const [contacts, setContacts] = useState();

  const [selectedContact, setSelectedContact] = useState();

  const [survey, setSurvey] = useState();

  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      // Add object to list for given key's value
      acc[key].push(obj);
      return acc;
    }, {});
  }
  const [open, setOpen] = useState(false);

  const [datesData, setdatesForStatistic] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const renderDate = (dateString) => {
    return new Date(dateString).toDateString();
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactToDelete = (contact) => {
    setSelectedContact(contact);
    setOpen(true);
  };

  const deleteContact = async (id) => {
    const response = await api.deleteContact(id);
    if (response.status) {
      setContacts(contacts.filter((contact) => contact.id != id));
    }
  };

  const showSurvey = (survey) => {
    setSurvey(survey);
  };

  useEffect(() => {
    if (contacts && !datesData) {
      const dates = contacts
        .map((contact) => {
          return renderDate(contact.date);
        })
        .reduce((acc, value) => {
          if (!acc[value]) {
            acc[value] = 1;
          } else {
            acc[value]++;
          }
          return acc;
        }, {});
      setdatesForStatistic(dates);
    }
  }, contacts);

  useEffect(() => {
    async function getRequestForm() {
      try {
        const response = await api.getContacts();
        setContacts(response.data);
        setLoading(false);
        scrollToBottom();
      } catch {
        setError(true);
      }
    }
    if (!contacts) getRequestForm();
  });
  return (
    <ProtectRoute>
      <TextWrapper>
        <StyledContact>
          <h1> אנשי קשר</h1>
          {contacts && (
            <div>
              <Table>
                <Thead>
                  <Tr>
                    <Th> </Th>
                    <Th> שם מלא</Th>
                    <Th> טלפון</Th>
                    <Th> דוא״ל</Th>
                    <Th> כתובת</Th>
                    <Th> תאריך</Th>
                    <Th> סוג השירות</Th>
                    <Th> שאלון </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {contacts.map((contact) => (
                    <Tr key={contact.id}>
                      <Td>
                        {" "}
                        <StyledRoundedButton
                          onClick={() => {
                            contactToDelete(contact);
                          }}
                        >
                          X
                        </StyledRoundedButton>{" "}
                      </Td>
                      <Td> {contact.fullname} </Td>
                      <Td>
                        <a href={`tel:${contact.phonenumber}`}>
                          {contact.phonenumber}
                        </a>
                      </Td>
                      <Td> {contact.email} </Td>
                      <Td> {contact.address} </Td>
                      <Td> {renderDate(contact.date)} </Td>
                      <Td> {contact.category} </Td>
                      <Td>
                        {contact.survey && (
                          <Button
                            onClick={() => {
                              showSurvey(contact.survey);
                            }}
                          >
                            {contact.survey.name}
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <div ref={messagesEndRef} />
            </div>
          )}
          {open && (
            <Modal
              deleteObject={deleteContact}
              object={selectedContact}
              setOpen={setOpen}
            ></Modal>
          )}
          {survey && <SurveyModal setSurvey={setSurvey} survey={survey} />}
          <ColumnChart data={datesData} />
        </StyledContact>
      </TextWrapper>
      </ProtectRoute>
    
  );
};

const StyledContact = styled.div`
  a:hover {
    color: blue;
  }
`;

const StyledRoundedButton = styled.button`
  height: 30px;
  width: 30px;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;

  &:hover {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    border: 3px solid red;
  }

  &:focus {
    color: ${(p) => p.theme.colors.white};
    background: ${(p) => p.theme.colors.torchRed};
    outline: none;
  }
`;

const SurveyModal = ({ survey, setSurvey }) => {
  const closeModal = () => {
    setSurvey();
  };

  return (
    <StyledSurveyModal>
      <h1> {survey.name}</h1>
      {survey.answers.map((entry) => (
        <div>
          <Text fontSize="large"> {entry.question}</Text>
          <Text> {entry.answer}</Text>
        </div>
      ))}
      <Button onClick={closeModal}>סגור</Button>
    </StyledSurveyModal>
  );
};

const StyledSurveyModal = styled.div`
  position: fixed;
  right: 0;
  padding: 20px;
  margin: 20px;
  bottom: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  max-width: 400px;
  color: black;
`;

export default ContactManagers;
