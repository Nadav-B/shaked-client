import Cookies from "js-cookie";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import getContacts from "../../services/ContactService";
import Text from "../../elements/Text";
import Button from "../../elements/Button";

const ContactManagers = () => {
  const [contacts, setContacts] = useState();

  // if (contacts) setContacts(res);

  const [result, setResult] = useState({
    text: "",
    style: "",
    status: false,
  });

  useEffect(() => {
    async function getRequestForm() {
      try {
        const response = await getContacts();
        setContacts(response);
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
          {contacts.map((contact) => (
            <tbody>
              <tr>
                <td>
                  {" "}
                  <StyledRoundedButton>X</StyledRoundedButton>{" "}
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
            </tbody>
          ))}
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

  &:focus,
  &:active {
    color: ${(p) => p.theme.colors.white};
    background: ${(p) => p.theme.colors.torchRed};
    outline: none;
  }
`;

export default ContactManagers;
