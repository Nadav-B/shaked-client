import { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../shared/api";
import Text from "../../elements/Text";
import Button from "../../elements/Button";
import Modal from "../../elements/Modal";

const ContactManagers = () => {
  const [contacts, setContacts] = useState();

  const [selectedContact, setSelectedContact] = useState();

  const [survey, setSurvey] = useState();

  const [open, setOpen] = useState(false);

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const renderDate = (dateString) => {
    return new Date(dateString).toDateString();
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
    async function getRequestForm() {
      try {
        const response = await api.getContacts();
        setContacts(response.data);
      } catch {
        setResult((prevState) => ({
          ...prevState,
          text: "שגיאה בחיבור לשרת",
          style: "error",
          status: false,
        }));
        setContacts([]);
        console.log("check connection to server");
      }
    }
    if (!contacts) getRequestForm();
  });

  return (
    api.isAuthenticated() && (
      <StyledContact>
        <h1> אנשי קשר</h1>
        <Text variant={result.style}>{result.text}</Text>
        {contacts && (
          <div>
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th> שם מלא</th>
                  <th> טלפון</th>
                  <th> דוא״ל</th>
                  <th> כתובת</th>
                  <th> תאריך</th>
                  <th> סוג השירות</th>
                  <th> שאלון </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      {" "}
                      <StyledRoundedButton
                        onClick={() => {
                          contactToDelete(contact);
                        }}
                      >
                        X
                      </StyledRoundedButton>{" "}
                    </td>
                    <td>{contact.fullname} </td>
                    <td> {contact.phonenumber}</td>
                    <td> {contact.email} </td>
                    <td> {contact.address} </td>
                    <td> {renderDate(contact.date)} </td>
                    <td> {contact.category} </td>

                    <td>
                      {contact.survey && (
                        <Button
                          onClick={() => {
                            showSurvey(contact.survey);
                          }}
                        >
                          {contact.survey.name}
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      </StyledContact>
    )
  );
};

const StyledContact = styled.div`
  position: relative;

  th {
    min-width: 100px;
    text-align: center;
    vertical-align: middle;
  }

  td {
    min-width: 100px;
    text-align: center;
    vertical-align: middle;
  }
`;

const StyledRoundedButton = styled.button`
  height: 30px;
  width: 30px;
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
