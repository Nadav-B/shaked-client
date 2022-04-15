import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

import Button from "../../../elements/Button";
import Error from "../../../elements/Error";
import Loading from "../../../elements/Loading";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import { ProtectRoute } from "../../../shared/protected_route";
import Wrapper from "../../../elements/Wrapper";
import { GetContacts } from "../../../graphql/__generated__/GetContacts";
import { useMutation, useQuery } from "@apollo/client";
import query from "../../../graphql/GetContacts.graphql";
import {
  DeleteContact,
} from "../../../graphql/__generated__/DeleteContact";
import mutation from "../../../graphql/DeleteContact.graphql";

const ContactManagers = () => {
  
  const { data, loading, error } = useQuery<GetContacts>(query);

  useEffect(() => {
    if (data && data.contacts && contacts.length == 0) {
      console.log(data);
      setContacts(data.contacts);
    }
  }, [data]);

  const [contacts, setContacts] = useState([]);

  const [deleteContactMutation] = useMutation<
    { deleteContact: DeleteContact },
    { id: Number }
  >(mutation);

  const [selectedContacts, setSelectedContacts] = useState([]);

  const deleteContact = (id: Number) => {
    const result = deleteContactMutation({
      variables: {
        id: id,
      },
    });

    result.then((result) => {
      setContacts(
        contacts.filter((contact) => contact.id !== result.data.deleteContact)
      );
      setSelectedContacts([]);
    });
  };

  const renderDate = (dateString) => {
    return new Date(dateString).toDateString();
  };

  const messagesEndRef = useRef(null);

  const updateSelectedContacts = (selected) => (event) => {
    if (event.target.checked) {
      setSelectedContacts([...selectedContacts, selected]);
    } else {
      setSelectedContacts(
        selectedContacts.filter((contact) => contact.id != selected.id)
      );
    }
  };

  if (error) return <Error errorDescription={"התחבר מחדש"} />;
  if (loading) return <Loading />;

  return (
    <ProtectRoute>
      <Wrapper>
        <StyledContact>
          <h1>אנשי קשר</h1>
          {contacts && (
            <div>
              <Table>
                <Thead>
                  <Tr>
                    <Th>סמן</Th>
                    <Th> שם מלא</Th>
                    <Th> טלפון</Th>
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
                          onClick={updateSelectedContacts(contact)}
                          checked={selectedContacts.find(
                            (object) => contact.id == object.id
                          )}
                          type="checkbox"
                        />
                      </Td>
                      <Td> {contact.fullName} </Td>
                      <Td>
                        <a href={`tel:${contact.phoneNumber}`}>
                          {contact.phoneNumber}
                        </a>
                      </Td>
                      <Td> {renderDate(contact.date)} </Td>
                      <Td> {contact.category} </Td>
                      <Td>
                        {contact.survey && (
                          <Button onClick={() => {}}>
                            {contact.survey.name}
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              {selectedContacts.length > 0 && (
                <StyledDeleteBanner>
                  <Button
                    className="flex-item"
                    onClick={() =>
                      selectedContacts.forEach((selectedContact) =>
                        deleteContact(selectedContact.id)
                      )
                    }
                  >
                    מחק {selectedContacts.length}
                  </Button>
                  <Button
                    className="flex-item"
                    onClick={() => setSelectedContacts([])}
                  >
                    נקה בחירה
                  </Button>

                  <Button
                    className="flex-item"
                    onClick={() => setSelectedContacts(contacts)}
                  >
                    סמן הכל
                  </Button>
                </StyledDeleteBanner>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </StyledContact>
        )
      </Wrapper>
    </ProtectRoute>
  );
};

const StyledContact = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  a:hover {
    color: blue;
  }

  td {
    text-align: center;
  }
`;

const StyledDeleteBanner = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;

  .flex-item:first-child {
    max-width: 70px;
  }

  .flex-item {
    margin: 20px;
  }
`;

const StyledDeleteModal = styled.div`
  text-align: center;
  margin: auto;
  height: 100%;
  vertical-align: middle;
`;

export default ContactManagers;
