import { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../services/api";
import Text from "../../elements/Text";
import Button from "../../elements/Button";

const ContactManagers = () => {
  const [contacts, setContacts] = useState();

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  const deleteContact = async (id) => {
    const response = await api.deleteContact(id);
    if (response.status) {
      setContacts(contacts.filter((contact) => contact.id != id));
    }
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
    <StyledContact>
      <h1> אנשי קשר</h1>
      <Text variant={result.style}>{result.text}</Text>
      {contacts && (
        <table>
          <thead>
            <tr>
              <th> </th>
              <th> שם מלא</th>
              <th> טלפון</th>
              <th> דוא״ל</th>
              <th> כתובת</th>
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
                      deleteContact(contact.id);
                    }}
                  >
                    X
                  </StyledRoundedButton>{" "}
                </td>
                <td>{contact.fullname} </td>
                <td> {contact.phonenumber}</td>
                <td> {contact.email} </td>
                <td> {contact.address} </td>
                <td> {contact.category} </td>

                <td>
                  {contact.survey && <Button>{contact.survey.name}</Button>}
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      )}
    </StyledContact>
  );
};

const StyledContact = styled.div`
  th {
    min-width: 100px;
  }

  td {
    min-width: 100px;
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

export default ContactManagers;
