import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import dates from "../../../shared/util/dates";

import Button from "../../../elements/Button";
import Error from "../../../elements/Error";
import Loading from "../../../elements/Loading";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import { ProtectRoute } from "../../../shared/protected_route";

import Link from "next/link";
import Flex from "../../../elements/Flex";
import Title from "../../../elements/Title";
import {
  useDeleteContactMutation,
  Contact,
  useGetContactsQuery,
} from "src/graphql/generated/graphql";

const ContactManagers = () => {
  const { data, loading, error } = useGetContactsQuery();

  
  const [contacts, setContacts] = useState>([]);

  useEffect(() => {
    if (data && data.contacts && contacts.length == 0) {
      setContacts(data.contacts);
    }
  }, [data]);

  const [deleteContactMutation] = useDeleteContactMutation();

  const [selectedContacts, setSelectedContacts] = useState([]);

  const deleteContact = (id: Number) => {
    const result = deleteContactMutation({
      variables: {
        id: String(id),
      },
    });

    result.then((result) => {
      setContacts(
        contacts.filter((contact) => contact.id !== result.data?.deleteContact)
      );
      setSelectedContacts([]);
    });
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

  if (error) return <Error errorDescription={"התחבר מחדש"} />;
  if (loading) return <Loading />;

  return (
    <ProtectRoute>
      <Flex alignItems="center" flexDirection="column">
        <Title>אנשי קשר</Title>

        {contacts && (
          <StyledContact>
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
                    <Td> {dates.renderDate(contact.createdAt)} </Td>
                    <Td> {contact.category} </Td>
                    <Td>
                      {contact.survey && (
                        <Link
                          href={{
                            pathname: "/admin/contacts/[id]",
                            query: { id: contact.id },
                          }}
                        >
                          <Button>{contact.survey.name}</Button>
                        </Link>
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
          </StyledContact>
        )}
      </Flex>
    </ProtectRoute>
  );
};

const StyledContact = styled.div`
  width: 100%;

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

export default ContactManagers;
function useGetContacts(): { data: any; loading: any; error: any } {
  throw new Error("Function not implemented.");
}
