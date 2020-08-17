import Cookies from "js-cookie";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import getContacts from "../../services/ContactService";
import Text from "../../elements/Text";
import Button from "../../elements/Button";

const ContactManagers = () => {
  const [contacts, setContacts] = useState([]);

  // if (contacts) setContacts(res);

  useEffect(() => {
    async function getRequestForm() {
      try {
        const response = await getContacts();
        setContacts(response);
      } catch {
        console.log("check connection to server");
      }
    }
    if (contacts.length == 0) getRequestForm();
  });

  return (
    <div>
      <h1> אנשי קשר</h1>
      {contacts.map((contact) => (
        <StyledContact>
          <Text>{contact.fullname} </Text>
          <Text>{contact.phonenumber} </Text>
          <Text>{contact.email} </Text>
          <Text>{contact.address} </Text>
          <Text>{contact.category} </Text>
          {contact.survey && <Button >{contact.survey.name}</Button>}
        </StyledContact>
      ))}
    </div>
  );
};

const StyledLabel = styled.label`
color: 
`

const StyledContact = styled.div`
  dislay: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  padding: 4px;
  margin: 4px;
  width: auto;
  min-height: 20px;
`;

export default ContactManagers;
