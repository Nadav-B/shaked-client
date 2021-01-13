import React from "react";
import Head from "next/head";
import api from "../../../shared/api";
import Button from "../../../elements/Button";
import styled from "styled-components";
import SEO from "../../../components/seo";

import { directByContact } from "../../../config/contactButtonLinks";
import TextWrapper from "../../../elements/TextWrapper";
const Service = ({ data }) => {
  const seo = {
    title: data.title,
    description: data.introduction,
  };

  return (
    <StyledWrapper>
      <Head>
        <SEO seo={seo} />
      </Head>

      <TextWrapper
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      ></TextWrapper>
      <Button
        onClick={() => {
          directByContact(data.contactButton);
        }}
      >
        {data.contactButton}
      </Button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

// This gets called on every request
export async function getServerSideProps({ query }) {
  const id = query.id;
  // Fetch data from external API
  const res = await api.getService(id);
  const data = await res.data;
  // Pass data to the page via props
  return { props: { data } };
}

export default Service;
