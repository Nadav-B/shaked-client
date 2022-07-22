import styled from "@emotion/styled";
import dates from "../../../shared/util/dates";

import Button from "../../../elements/Button";
import Error from "../../../elements/Error";
import Loading from "../../../elements/Loading";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import React from "react";
import { ProtectRoute } from "../../../shared/protected_route";

import Link from "next/link";
import Flex from "../../../elements/Flex";
import Title from "../../../elements/Title";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "src/graphql/generated/graphql";

const ContactManagers: React.FC = () => {
  const { data, loading, error, refetch } = useGetContactsQuery();

  if (error) return <Error description={"התחבר מחדש"} />;
  if (loading) return <Loading />;

  return (
    <ProtectRoute>
      <Flex alignItems="center" flexDirection="column">
        <Title>אנשי קשר</Title>

        <StyledContact>
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th> שם מלא</Th>
                <Th> טלפון</Th>
                <Th> תאריך</Th>
                <Th> סוג השירות</Th>
                <Th> שאלון </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.contacts?.map((contact) => (
                <Tr key={contact?.id}>
                  <Td>
                    <DeleteContactComponent
                      id={contact?.id}
                    ></DeleteContactComponent>
                  </Td>
                  <Td> {contact?.fullName} </Td>
                  <Td>
                    <a href={`tel:${contact?.phoneNumber}`}>
                      {contact?.phoneNumber}
                    </a>
                  </Td>
                  <Td> {dates.renderDate(contact?.createdAt)} </Td>
                  <Td> {contact?.category} </Td>
                  <Td>
                    {contact?.survey && (
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
        </StyledContact>
      </Flex>
    </ProtectRoute>
  );
};

const DeleteContactComponent = ({ id }) => {
  const [
    deleteModuleMutation,
    { data, loading, error },
  ] = useDeleteContactMutation();

  if (data) {
    return (
      <Button disabled={true} maxWidth={"50px"} background="blue" type="button">
        הוסר
      </Button>
    );
  }

  return (
    <Button
      maxWidth={"50px"}
      type="button"
      onClick={() => {
        deleteModuleMutation({ variables: { id: String(id) } });
      }}
    >
      הסר
    </Button>
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

export default ContactManagers;
