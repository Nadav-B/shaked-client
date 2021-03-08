import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import api from "../../shared/api";
import Text from "../../elements/Text";

import Button from "../../elements/Button";
import Error from "../../elements/Error";

import Modal from "../../elements/Modal";
import TextWrapper from "../../elements/TextWrapper";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Chartkick, { ColumnChart, PieChart } from "react-chartkick";
import "chart.js";
import { ProtectRoute } from "../../shared/protected_route";

const ContactManagers = () => {
  Chartkick.options = {
    colors: ["#F77F00", "#FCBF49"],
  };
  const [contacts, setContacts] = useState();

  const [selectedContacts, setSelectedContacts] = useState([]);

  const [selectedContact, setSelectedContact] = useState();

  const [survey, setSurvey] = useState();

  const [modalView, setModalView] = useState(false);

  const [datesData, setdatesForStatistic] = useState(null);

  console.log(selectedContacts);
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
    setModalView(true);
  };

  const deleteContact = async (id) => {
    const response = await api.deleteContact(id);
    if (response.status) {
      setContacts(contacts.filter((contact) => contact.id != id));
    }
  };

  const updateSelectedContacts = (selected) => (event) => {
    if (event.target.checked) {
      setSelectedContacts([...selectedContacts, selected]);
    } else {
      setSelectedContacts(
        selectedContacts.filter((contact) => contact.id != selected.id)
      );
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

  if (error) return <Error />;
  return (
    <ProtectRoute>
      <TextWrapper>
        <StyledContact>
          <h1>אנשי קשר</h1>
          {contacts && (
            <div>
              <Table>
                <Thead>
                  <Tr>
                    <Th> מחק</Th>
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
                        <input
                          onChange={updateSelectedContacts(contact)}
                          type="checkbox"
                        />
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

              {selectedContacts.length && (
                <StyledDeleteBanner>
                  <Button onClick={() => setModalView(true)}>מחק</Button>
                </StyledDeleteBanner>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
          {modalView && (
            <Modal
              modalFunction={deleteContact}
              object={selectedContact}
              setOpen={setModalView}
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

const StyledDeleteBanner = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
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
