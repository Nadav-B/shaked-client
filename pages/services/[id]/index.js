import React from "react";
import Head from "next/head";
import Button from "../../../elements/Button";
import Loading from "../../../elements/Loading";
import { useRouter } from 'next/router'
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { directByContact } from "../../../config/contactButtonLinks";
import TextWrapper from "../../../elements/TextWrapper";
import styled from "styled-components";

const SERVICE_QUERY = gql`
  query Service($id: ID!){
    getService(id: $id) {
      id
      introduction
      content
      contactButton
    }
  }
`;
const Service = () => {
  const router = useRouter()
  const id  = router.query.id
  const { data, loading, error } = useQuery(SERVICE_QUERY, {
    variables: {
      id: id
    },
  });

  if (loading) return <Loading />;
  if (error) return <span></span>;
  return (
    <StyledWrapper>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.getService.introduction}></meta>
        <meta
          property="og:title"
          content={data.getService.title}
          key="ogtitle"
        />

        <meta
          property="og:description"
          content={data.getService.introduction}
          key="ogdesc"
        />
        <title>{"shaked"}</title>
      </Head>

      <TextWrapper
        dangerouslySetInnerHTML={{
          __html: data.getService.content,
        }}
      ></TextWrapper>
      <Button
        onClick={() => {
          directByContact(data.getService.contactButton);
        }}
      >
        {data.getService.contactButton}
      </Button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export default Service;
